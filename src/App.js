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
import Unit from './pages/Sales/Unit';
import Login from './pages/Login/Login';
import DaftarIPL from './pages/Invoice/DaftarIPL';

const App = () => {


  const logout = () => {
    return(
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Login />} />
        
        </Routes>
      
    </BrowserRouter>
    )
  }

  const login = () => {

    return(

      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unit" element={<Unit />} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/newcustomer" element={<NewCustomer />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>

    )

  }

  if (window.localStorage.getItem('TokenCHL') === null) {
    return(
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Login />} />
        
        </Routes>
      
    </BrowserRouter>
    )
    
  }else{
    return(

      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unit" element={<Unit />} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/newcustomer" element={<NewCustomer />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/daftaripl" element={<DaftarIPL />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>

    )
  }


  
};

export default App;