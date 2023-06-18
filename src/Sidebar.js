import React from 'react'
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
 return (
  <div>
    <div className="sidebar">
     <Link to="/products" className='sec'>All Products</Link>
     <Link to="/categories" className='sec'>All Categories</Link>
   </div>
  </div>
 )
}

export default Sidebar;
