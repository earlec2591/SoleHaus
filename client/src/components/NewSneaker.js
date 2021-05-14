import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const AddSneaker = (props) => {
  const [addSneaker, setAddSneaker] = useState({
    brand: "",
    name: "",
    colorway: "",
    releaseDate: "",
    size: "",
    condition: "",
    price: "",
    img: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/sneakers', addSneaker)
      .then((res) => {
        console.log(res.data);
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const inputChange = (e) => {
    console.log("e.target.brand: " + e.target.brand);
    console.log("e.target.value: " + e.target.value);

    let newStateObject = { ...addSneaker };
    newStateObject[e.target.name] = e.target.value;
    setAddSneaker(newStateObject);
  };

  return (
    <div>
      <h2>Sell Your Sneaker</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Brand </label>
          <input
            type="text"
            name="brand"
            value={addSneaker.brand}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={addSneaker.name}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Colorway </label>
          <input
            type="text"
            name="colorway"
            value={addSneaker.colorway}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Release Date </label>
          <input
            type="date"
            name="releaseDate"
            value={addSneaker.releaseDate}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Size </label>
          <input
            type="text"
            name="size"
            value={addSneaker.size}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Condition </label>
          <select
            name="condition"
            value={addSneaker.condition}
            onChange={inputChange}
            >
            <option value="Deadstock">Deadstock</option>
            <option value="Gently Worn">Gently Worn</option>
            <option value="Used">Used</option>
            <option value="Very Used">Very Used</option>
            <option value="Destroyed">Destroyed</option>
            </select>
        </div>
        <div>
          <label>Price </label>
          <input
            type="number"
            min="1"
            name="price"
            value={addSneaker.price}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Upload Image </label>
          <input
            type="text"
            name="img"
            value={addSneaker.img}
            onChange={inputChange}
          />
        </div>
        <button>SELL!</button>
      </form>
    </div>
  );
};

export default AddSneaker;
