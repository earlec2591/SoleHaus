import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import SneakerForm from "./SneakerForm";

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

  return (
    <div>
      <h1>Sell Your Soles</h1>
        <SneakerForm 
          sneaker={ addSneaker }
          setSneaker={ setAddSneaker }
          errors={ errors }
          submitHandler={ submitHandler }
          buttonLabel={ "Submit Your Sneaker Listing"}
        />
    </div>
  );
};

export default AddSneaker;
