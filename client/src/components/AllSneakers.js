import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const AllSneakers = (props) => {
  const [ allSneakers, setAllSneakers ] = useState([]);

  const getAllSneakers = () => {
    axios.get('http://localhost:8000/api/sneakers')
      .then((res) => {
        console.log(res.data);
        setAllSneakers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return(
    <div>
      <h1>Inventory</h1>
      <button onClick={getAllSneakers}>Show Inventory</button>
      <Link to='/sneakers/add'>
        <button>Sell Your Sneakers</button>
      </Link>
      {
        allSneakers.map((sneaker, index) => (
          <div key={ index }>
            <Link to={`/sneakers/${sneaker._id}`}>
            <img src={sneaker.img} alt='sneaker-img'/>
            <h4>{sneaker.brand} {sneaker.name} {sneaker.colorway} {sneaker.size}</h4>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default AllSneakers; 