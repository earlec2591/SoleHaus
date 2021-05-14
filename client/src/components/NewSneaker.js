import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const AddSneaker = (props) => {
  const [ errors, setErrors ] = useState({});
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
        console.log(err.response.data.errors)
        setErrors(err.response.data.errors);
      })
  };

  const size = [
    "3.5Y",
    "4Y",
    "4.5Y",
    "5Y",
    "5.5Y",
    "6Y",
    "6.5Y",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
    "14",
    "15",
  ];

  const condition = [
    "Deadstock", 
    "Gently Worn", 
    "Used", 
    "Very Used", 
    "Destroyed" 
  ];

  const inputChange = (e) => {
    console.log("e.target.brand: " + e.target.brand);
    console.log("e.target.value: " + e.target.value);

    let newStateObject = { ...addSneaker };
    newStateObject[e.target.name] = e.target.value;
    setAddSneaker(newStateObject);
  };

  return (
    <div>
      <h1>Sell Your Sneaker</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Brand </label>
          {
            errors.brand ? 
              <span className="error-text">{errors.brand.message}</span>
              : null
          }
          <input
            type="text"
            name="brand"
            value={addSneaker.brand}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Name </label>
          {
            errors.name ? 
              <span className="error-text">{errors.name.message}</span>
              : null
          }
          <input
            type="text"
            name="name"
            value={addSneaker.name}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Colorway </label>
          {
            errors.colorway ? 
              <span className="error-text">{errors.colorway.message}</span>
              : null
          }
          <input
            type="text"
            name="colorway"
            value={addSneaker.colorway}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Release Date </label>
          {
            errors.releaseDate ? 
              <span className="error-text">{errors.releaseDate.message}</span>
              : null
          }
          <input
            type="date"
            name="releaseDate"
            value={addSneaker.releaseDate}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Size </label>
          {
            errors.size ? 
              <span className="error-text">{errors.size.message}</span>
              : null
          }
          <select
            name="size"
            value={addSneaker.size}
            onChange={inputChange}
            >
            <option value=""></option>
            {
              size.map((size, index) => (
                <option value={ size } key={ 'size-' + index }>{ size }</option>
              ))
            }
            </select>
        </div>
        <div>
          <label>Condition </label>
          {
            errors.condition ? 
              <span className="error-text">{errors.condition.message}</span>
              : null
          }
          <select
            name="condition"
            value={addSneaker.condition}
            onChange={inputChange}
            >
            <option value=""></option>
            {
              condition.map((condition, index) => (
                <option value={ condition } key={ 'condition-' + index }>{ condition }</option>
              ))
            }
            </select>
        </div>
        <div>
          <label>Price </label>
          {
            errors.price ? 
              <span className="error-text">{errors.price.message}</span>
              : null
          }
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
          {
            errors.img ? 
              <span className="error-text">{errors.img.message}</span>
              : null
          }
          <input
            type="text"
            name="img"
            value={addSneaker.img}
            onChange={inputChange}
          />
        </div>
        <button>$ELL!</button>
        <button onClick={ () => navigate('/sneakers/all/')} className="buyBtn">Buy Sneakers</button>
        <button onClick={ () => navigate('/')} className="homeBtn">Return Home</button>
      </form>
    </div>
  );
};

export default AddSneaker;
