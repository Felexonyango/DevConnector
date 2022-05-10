import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import Contact from './Contact';

function Footer() {
    const year= new Date().getFullYear()
  return (
    <div className='footer-container bg-dark '>
     <div>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>Our story</Link>
            <Link to='/how-it-works'>How it works</Link>
            
            <Link to='/blog'>Blog </Link>
          
          </div>
          <div class='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/help'>Help & FAQ</Link>
       
            <Link to ='/contact'>Contact us</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Policies</h2>
            <Link to='/policy'>Private policy</Link>
            <Link to='/terms'>Terms and service</Link>
           
          </div>
          <div class='footer-link-items'>
            <h2>Follow us on</h2>
           <Contact/>
           
          </div>
          
        </div>
      </div>
   
      </div>
     
       <p>Copyright © {year} </p>
      
    </div>
  );
}

export default Footer;