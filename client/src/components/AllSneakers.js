import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import Checkout from "./Checkout";

const AllSneakers = (props) => {
  const [allSneakers, setAllSneakers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sneakers")
      .then((res) => {
        console.log(res.data);
        setAllSneakers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <p>Sort: Price Low to High</p>
      <div className="invButtons">
      <Link to="/sneakers/add">
        <button className="buyBtn">Sell Your Sneakers</button>
      </Link>
      </div>
      <div className="container">
        {allSneakers.map((sneaker, index) => (
          <div key={index}>
            <Link to={`/sneakers/${sneaker._id}`}>
              <img src={sneaker.img} alt="sneaker-img" />
              <h3>
                {sneaker.brand} {sneaker.name}
              </h3>
            </Link>
            <h4>Colorway: {sneaker.colorway}</h4>
            <h4>Size: {sneaker.size}</h4>
            <h4>Price: ${sneaker.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSneakers;
