

import './App.css'
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './components/layouts/HomePage';
import Footer from './components/layouts/Footer';


function App() {
  return (

      <Router>
       {/* <Navbar />
       <AlertPopup /> */}
        <Routes>
         <Route path="/" index element={ <HomePage />} />
         {/* <Route path="/product/add" element={<MotorbikeAddForm />} />
         <Route path="/product/update/:id" element={<MotorbikeUpdateForm />} />
         <Route path="/products"  element={ <ProductListPage />} />
         <Route path="/catalog" element={<MotorbikeCatalogPage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/my-orders" element={<MyOrders />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<RegisterFrom />} /> */}
        </Routes>
        <Footer />
       </Router>
     
       );
  
}

export default App
