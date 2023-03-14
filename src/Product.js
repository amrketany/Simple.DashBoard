import React, { useEffect, useState } from 'react';
import "./Product.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

 const Product = () => {
 const [product, setProduct] = useState([]);
 
   
   //Get All Products Function
 const getAllproducts = () => {
   fetch("http://localhost:9000/Products")
   .then((resp) => resp.json())
   .then((data) => setProduct(data));
}

   useEffect(() => { getAllproducts() }, []);
 
   //Delete Function
   const deletProduct = (product) => {
     Swal.fire({
       title: `Are You Sure To Delete ${product.title} ?`,
       showCancelButton: true
     }).then((data) => {
       if (data.isConfirmed) {
         fetch(`http://localhost:9000/Products/${product.id}`, {
           method: "DELETE"
         }).then((resp) => resp.json())
           .then((data) => getAllproducts());
       }
     });
 }

   return (
     <div className='v'>
       <h1>Product Page</h1>
       <Link to="/products/add" className='btn btn-outline-success'>Add New Record</Link>
       <table className='table table-striped mt-5'>
         <thead>
           <tr>
             <th>ID</th>
             <th>Title</th>
             <th>Description</th>
             <th>Price</th>
             <th>Operations</th>
           </tr>
         </thead>
         <tbody>
           {product.map((e) => {
             return (
               <tr key={e.id}>
                 <td>{e.id}</td>
                 <td>{e.title}</td>
                 <td>{e.description}</td>
                 <td>{e.price}</td>
                 <td>
                   <button className='btn btn-outline-danger' onClick={() => deletProduct(e)}>Delete</button>
                   <button className='btn btn-outline-warning'>Edit</button>
                   <Link to={`/products/${e.id}`} className='btn btn-outline-info'>View</Link>
                 </td>
               </tr>
             )
           })}
         </tbody>
       </table>
     </div>
   )
}

export default Product;
