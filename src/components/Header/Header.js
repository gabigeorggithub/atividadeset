import React from 'react';
import './Header.css'
import logoImage from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';



const Header = () => {

  return (
    <header className="header-container1">
      <div className="left-section1">
        <img src={logoImage} alt="Logo" className="logo1" />
      </div>
      
    </header>
  );
};

export default Header;