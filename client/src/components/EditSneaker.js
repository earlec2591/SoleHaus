import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import SneakerForm from "./SneakerForm";

const EditSneaker = (props) => {
  const [ errors, setErrors ] = useState({});
  const [sneaker, setSneaker] = useState({
    brand: "",
    name: "",
    colorway: "",
    releaseDate: "",
    size: "",
    condition: "",
    price: "",
    img: "",
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/sneakers/' + props.id)
      .then((res) => {
        console.log(res.data);
        setSneaker(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate('/');
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8000/api/sneakers/' + props.id, sneaker)
      .then((res) => {
        console.log(res.data);
        navigate('/sneakers/' + props.id)
      })
      .catch((err) => {
        console.log(err.response.data.errors)
        setErrors(err.response.data.errors);
      })
  };

  return (
    <div>
      <h1>Edit Your Sneaker Listing</h1>
        <SneakerForm 
          sneaker={ sneaker }
          setSneaker={ setSneaker }
          errors={ errors}
          submitHandler={ submitHandler }
          buttonLabel={ "Submit Your Sneaker Listing"}
        />
    </div>
  );
};

export default EditSneaker;
