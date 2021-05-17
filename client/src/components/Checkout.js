import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Checkout = (props) => {
  const [ buySneaker, setBuySneaker ] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8000/api/sneakers/' + props.sneaker_id)
      .then((res) => {
        console.log(res.data);
        setBuySneaker(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return(
    <div>
      <h1>Sole Haus</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>{ buySneaker.brand } { buySneaker.name }</h2>
      <img src={ buySneaker.img } alt={buySneaker.name} />
      <h4>You will receive a confirmation to the email address listed in your account. Your item will ship within two business days and we will send a follow up email with your tracking number. Thank you for being a member of the best sneaker community in the world! </h4>
      <h5>Click <Link to='/sneakers/all/'>here</Link> to keep shopping!</h5>

      </div>
  )
}

export default Checkout;