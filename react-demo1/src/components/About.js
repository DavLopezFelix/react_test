// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Restricted David's Page</h1>
      <p>Learn more about us...</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default About;
