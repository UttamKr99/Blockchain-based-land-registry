import React from 'react';
import './Navbar.css'

export const Navbar = () => {
  return  <div class="header">
  <a href="#default" class="logo">Blockchain Based Land Registary System</a>
  <div class="header-name">  
  Register Account
  </div>
  <div class="header-right">
    <a class="active" href="#home">Login</a>
    <a href="#about">About</a>
    <a href="#help">Help</a>
  </div>
</div> 
};
