// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Public David's Page</h1>
      <p>Welcome to the Home Page</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default Home;
