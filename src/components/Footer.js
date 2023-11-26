// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram ,FaArrowRight } from 'react-icons/fa';
import '../CSS/Footer.css';

function Footer() {
  return (
    <div className='footer-main-container'>
      <ul className='footer-list-container'>
        <li className='footer-list'>
          <img src="https://img.freepik.com/free-vector/elderly-people-holding-health-icons_53876-43068.jpg?w=2000"/>
          <h2>Elderly Health</h2>
          <p>Elderly Health is the Administrative Support Entity for All Clinical Services</p>
          <p>Call Us (+91)1800 233</p>
          <ul className='elderly-health-container'>
            <li className='elderly-health-list'>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className='elderly-health-list'>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li className='elderly-health-list'>
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <FaGoogle />
              </a>
            </li>
            <li className='elderly-health-list'>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </li>
        <li className='footer-list'>
          <h2>About Company</h2>
          <ul className='about-company-container'>
            <li className='about-company-list'>Company</li>
            <li className='about-company-list'>Find Doctor</li>
            <li className='about-company-list'>Our Service</li>
            <li className='about-company-list'>Plan & Pricing</li>
            <li className='about-company-list'>Locations</li>
          </ul>
        </li>
        <li className='footer-list'>
          <h2>Help & Support</h2>
          <ul className='help-support-container'>
            <li className='help-support-list'>Consultation Call</li>
            <li className='help-support-list'>Help / Support</li>
            <li className='help-support-list'>White Label</li>
            <li className='help-support-list'>Sign in</li>
            <li className='help-support-list'>Appointment</li>
          </ul>
        </li>
        <li className='footer-list'>
          <input placeholder="Enter your email" />
          <button type='submit' style={styles.button}>Submit Now <FaArrowRight /></button>
        </li>
      </ul>
      <hr />
      <p>Copyright @2023. All Rights Reserved</p>
    </div>
  );
}
const styles ={
  button:{
    backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 20px",
  border:" none",
  borderRadius:" 4px",
  cursor: "pointer"
  }
}
export default Footer;
