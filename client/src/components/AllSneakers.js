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
      <h2>Inventory</h2>
      <button onClick={getAllSneakers}>Show Inventory</button>
      {
        allSneakers.map((sneaker, index) => (
          <div key={ index }>
            <h4>{sneaker.brand} {sneaker.name}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default AllSneakers; 