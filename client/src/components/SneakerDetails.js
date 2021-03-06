import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const SneakerDetails = (props) => {
  const [sneaker, setSneaker] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sneakers/" + props.sneaker_id)
      .then((res) => {
        console.log(res.data);
        setSneaker(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const buySneaker = () => {
    // axios
    //   .delete("http://localhost:8000/api/sneakers/" + props.sneaker_id)
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate("/checkout");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    navigate('/checkout/' + props.sneaker_id)
  };

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

  return (
    <div>
      <h1>Sole Details</h1>
      <h2>
        {sneaker.brand} {sneaker.name}
      </h2>
      <img src={sneaker.img} alt={sneaker.name} />
      <p>
        Release Date:{" "}
        {new Date(sneaker.releaseDate).toLocaleDateString("en-us")}
      </p>
      <p>Size Available: {sneaker.size}</p>
      <p>Condition: {sneaker.condition}</p>
      <p>Price: ${sneaker.price}</p>
      <div className="invButtons">
        <button onClick={() => navigate(`/sneakers/${sneaker._id}/edit`)}>
          Update Sneaker Info
        </button>
        <button onClick={buySneaker} className="buyBtn">
          Buy Sneaker
        </button>
        <button onClick={() => navigate("/sneakers/all")} className="homeBtn">
          Return To Inventory
        </button>
      </div>
    </div>
  );
};

export default SneakerDetails;
