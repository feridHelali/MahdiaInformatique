import { useEffect, useState } from "react";
import api from "../../api/common.http";
import './ProductCatalogPage.css'
import getPhotoUrl from '../../utilities/getPhotoUrl'
import { Typography } from "@mui/material";


function ProductCatalogPage() {
  const [products, setProducts] = useState([]);
  
  async function getProducts() {
    await api
      .get(`/motor/all`)
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error(error.message));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productCatalog">
      {products?.map((product) => (<div key={product._id}>
        <div className="product__line">
          <img src={getPhotoUrl(product?.cover_url)} alt={product.label} />
          <Typography variant='h5' m={2} >{product?.label}</Typography>
          <Typography variant="h6" m={2}>{product?.brand}</Typography>
          <Typography variant="h5" m={2}>{product?.price?.toFixed(3)}</Typography>
          <AddToCart id={product?._id} />
          </div>
      </div>))}
    </div>
  )
}

export default ProductCatalogPage