import React from 'react';
import './header.css'; // Your CSS file for styling
import LOGO from '../assets/svg/LogoLOGO.svg'

const Header = () => {
  return (
    <div className="container">
      <div className="header-container">
        <a className="logo" href="/">
          <img className="logo-light desktop" src={LOGO} alt="Logo Light" />
          
        </a>

        <div className="d-flex align-items-center default_header">
          {/* <ul id="menu-main-menu" className="primary-menu">
            <li className="menu-item menu-item-has-children">
              <a href="/trading">Trading<i className="fa fa-angle-down menu-parent-arrows"></i></a>
              
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="/deposit">Deposit<i className="fa fa-angle-down menu-parent-arrows"></i></a>
             
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="/withdraw">Withdraw<i className="fa fa-angle-down menu-parent-arrows"></i></a>
              
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="/connect">Connect<i className="fa fa-angle-down menu-parent-arrows"></i></a>
              {/* <ul className="sub-menu">
                <li className="menu-item"><a href="/contact/">Contact</a></li>
                <li className="menu-item"><a href="/request-a-call-back/">Request a Call Back</a></li>
                <li className="menu-item"><a href="/faq-central/">Support</a></li>
              </ul> */}
            {/* </li>
          </ul> */} 

         

        </div>

        
      </div>
    </div>
  );
};

export default Header;
