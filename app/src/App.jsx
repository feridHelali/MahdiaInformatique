

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './components/layouts/HomePage';
import Footer from './components/layouts/Footer';
import ProductAddForm from './components/Product/ProductForms/ProductAddForm';
import ProductUpdateForm from './components/Product/ProductForms/ProductUpdateForm';
import ProductCatalogPage from './components/Product/ProductCatalogPage';
import ProductListPage from './components/layouts/ProductListPage';
import MyOrders from './components/MyOrders/MyOrders';
import Login from './components/user/Login';
import RegisterFrom from './components/user/RegisterForm';
import AlertPopup from './components/Alert/AlertPopup';
import Navbar from './components/layouts/Navbar';
import CartPage from './components/Cart/CartPage';


function App() {
  return (

      <Router>
       <Navbar />
       <AlertPopup /> 
        <Routes>
         <Route path="/" index element={ <HomePage />} />
         <Route path="/product/add" element={<ProductAddForm />} />
         <Route path="/product/update/:id" element={<ProductUpdateForm />} />
         <Route path="/products"  element={ <ProductListPage />} />
         <Route path="/catalog" element={<ProductCatalogPage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/my-orders" element={<MyOrders />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<RegisterFrom />} />
        </Routes>
        <Footer />
       </Router>
     
       );
  
}

export default App
