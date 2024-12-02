import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>Simple Pipefy App</h1>
    <p>Welcome to the Pipefy integration sample app!</p>
    <Link to="/about">Go to About</Link>
  </div>
);

export default App;
