import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  const AddProduct = () => {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState('');
    let navigate = useNavigate();
  const onSubmition = (e) => {
    e.preventDefault();
    console.log(price);
    console.log(title);
    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify({ title: title, price: price })
    }).then((resp) => resp.json()).then((data)=>navigate("/products"))

  }

    return (
      <div>
        <h1>Add Product</h1>
        <form onSubmit={onSubmition}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Product Title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Price</label>
            <input type="number" className="form-control" id="exampleInputPassword1"
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
    );
  }

  
export default AddProduct;
