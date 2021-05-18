import React from 'react';
import { navigate, Link } from '@reach/router';

const Login = (props) => {
  const { submitHandler } = props;
  


  return(
    <div>
      <h1>Welcome To Sole Haus!</h1>
      <br />
      <br />
      <h3>The number one sneaker boutique in the world where you can buy & sell the hottest & most exclusive shoes in the market!</h3>
      <h3>Our mission is to provide hassle free and transparent pricing to our customers. Every shoe is verified authentic before it is shipped to you. Trust us with your soles!</h3>
      <h3>Login or signup to enter.</h3>
      <img src="https://odyssey.antiochsb.edu/wp-content/uploads/2016/01/sneaker-collage.png" alt="sneaker-background" />
      <br />
      <form onSubmit={submitHandler}>
        <div>
          <label>Email </label>
          <input
            type="text"
            name="email"
          />
          <label>Password </label>
          <input
            type="password"
            name="password"
          />
        </div>
        <div className="invButtons">
        <button onClick={ () => navigate('/sneakers/all/')} className="homeBtn">Login</button>
        <h5>Not a member? Click <Link to='/signup'>here</Link> to signup!</h5>
        </div>
      </form>
    </div>
  )
}

export default Login; 