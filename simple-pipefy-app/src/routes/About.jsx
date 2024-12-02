import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>About Page</h1>
    <p>This is a sample route in a React application.</p>
    <Link to="/">Back to Home</Link>
  </div>
);

export default About;
