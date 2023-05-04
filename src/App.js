import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashbosrd/Dashboard';
import Invoice from './pages/Invoice/Invoice';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import NewCustomer from './pages/Sales/NewCustomer';
import Sales from './pages/Sales/Sales';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/newcustomer" element={<NewCustomer />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;