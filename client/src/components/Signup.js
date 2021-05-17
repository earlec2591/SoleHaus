import React from 'react';
import { navigate, Link } from '@reach/router';

const Signup = (props) => {
  const { submitHandler } = props;

  return(
    <div>
      <h1>Sole Haus</h1>
      <h2>Create An Account</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
          />
          <label>Birthday</label>
          <input
            type="date"
            name="birthday"
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
          />
        </div>
        <button onClick={ () => navigate('/sneakers/all/')} className="homeBtn">Submit</button>
      </form>
    </div>
  )
}

export default Signup; 