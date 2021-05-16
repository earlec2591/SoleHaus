import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const SneakerDetails = (props) => {
  const [ sneaker, setSneaker ] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8000/api/sneakers/' + props.sneaker_id)
      .then((res) => {
        console.log(res.data);
        setSneaker(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const buySneaker = () => {
    axios.delete('http://localhost:8000/api/sneakers/' + props.sneaker_id)
      .then((res) => {
        console.log(res.data);
        navigate('/sneakers/all/')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  

/*
"_id": "609c574ce4059aa40cfff8f4",
"brand": "Adidas",
"name": "Yeezy Slide",
"colorway": "Bone",
"releaseDate": "2019-12-06T08:00:00.000Z",
"size": 7,
"condition": "Very Used",
"price": 400,
"img": "https://images.stockx.com/images/Yeezy-Slide-Bone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1608522495"
*/

  return(
    <div>
      <h1>Sole Details</h1>
      <h2>{ sneaker.brand } { sneaker.name } { sneaker.brand }</h2>
      <img src={ sneaker.img } alt={sneaker.name} />
      <p>Release Date: { (new Date (sneaker.releaseDate)).toLocaleDateString("en-us") }</p>
      <p>Size: { sneaker.size }</p>
      <p>Condition: { sneaker.condition }</p>
      <p>Price: ${ sneaker.price }</p>
      <button onClick={ () => navigate(`/sneakers/${sneaker._id}/edit`) }>Edit Sneaker Info</button>
      <Link to='/sneakers/all/'>Return to Inventory</Link>
      <button onClick={ buySneaker } className="buyBtn">Buy Sneaker</button>
    </div>
  )
}

export default SneakerDetails; 