import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
 const params = useParams();
 const [details, setDetails] = useState({});
 useEffect(() => {
  fetch(`http://localhost:9000/Products/${params.id}`)
   .then((resp) => resp.json())
   .then((data) => setDetails(data));
 },[params.id])

 return (
  <div>
   <div className="card" >
    <div className="card-body">
     <h5 className="card-title">{details.id }</h5>
     <h5 className="card-title">{details.title }</h5>
     <p className="card-text">{details.description}</p>
     <a href="/ff#" className="btn btn-primary">{details.price }</a>
   </div>
  </div>
  </div>
 )
}

export default ProductDetails;
