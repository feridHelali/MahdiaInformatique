import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import api from "../../api/common.http";
import Button from "@mui/material/Button";
import { useAlert } from "../Alert/AlertContext";
import { AlertActions } from "../Alert/alert.actions";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";



function CartPage() {
  const { items, cleanCart } = useCart();
  const [products, setProducts] = useState([]);
  const [_,dispatch]= useAlert()
  const navigate = useNavigate()

  console.log(items)

  function getProductById(id) {
    return products.find((product) => product._id === id);
  }

  async function getProducts() {
    await api
      .get(`/product/all`)
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error(error.message));
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function submitOrder(){
      api.post('/order/add',{details:mapToBody(items)})
      .then(response=>response.data)
      .then(data => {
        dispatch(AlertActions.showInfoAlert(data.message))
        cleanCart()
        navigate('/')
      })
      .catch(error => console.log(error.message))
  }

  function mapToBody(items) {
    return items.map(item => {
        return ({
            product: item.id,
            qte: item.quantity
        })
    })
}

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <table className="productTable">
        <thead>
          <tr className="cartHead__row">
            <th className="cartHead__cell">#</th>
            <th className="cartHead__cell">Label</th>
            <th className="cartHead__cell">Price</th>
            <th className="cartHead__cell">Quantity</th>
            <th className="cartHead__cell">Total</th>
          </tr>
        </thead>
        <tbody className="productTable_body">
          {items.map((item, index) => (
            <CartItem
              key={item.id}
              order={index}
              id={item.id}
              quantity={item.quantity}
              label={getProductData(item.id)?.label}
              price={getProducrData(item.id)?.price}
              totalLine={
                (item.quantity * getProductData(item.id)?.price).toFixed(3) ||
                ""
              }
            />
          ))}
        </tbody>
        </table>
        <div className="cart_foot">
              <span>
                Total :
              </span>
              <span>{(items.reduce((sum, item) => sum + item.quantity * getProductData(item.id)?.price, 0)).toFixed(3)}
              </span>
        </div>

      <Button variant="outlined" style={{ width: "100%" }} onClick={()=>submitOrder()}>Order</Button>
    </div>
  );
}

export default CartPage;
