import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./AllCategories.css";
const AllCategoties = () => {


 const [categories, setCategories] = useState([]);
 
 //View All Catecories
 useEffect(() => {
  fetch("http://localhost:9000/categories")
   .then((resp) => resp.json())
   .then((data) => setCategories(data));
 }, []);

  return (
   <div className="allCategories">
    {
     categories.map((e) => {
      return (
       <Link to={"/products"}  className='link' key={e} >Go To {e}</Link>
      )
     })
    }
    </div>
  )
}

export default AllCategoties;
