import React from 'react'
import shoppieslogo from '../assets/shoppies-logo.png';

//stateless component
const Titlebar = () => (
  <div>
    <img src={shoppieslogo} alt="shoppieslogo" />
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h5>movie awards for entrepreneurs</h5>
  </div>
)

export default Titlebar
