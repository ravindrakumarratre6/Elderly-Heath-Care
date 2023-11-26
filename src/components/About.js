import React from "react";
import { FaUser, FaLock, FaSmile, FaClock } from 'react-icons/fa';
import "../CSS/About.css"; // Assuming you have a CSS file for styling
import PatientDetails from "./PatientDetails";

function About() {
  return (
    <div className="about-main-container">
      <p>WHY CHOOSE US</p>
      <h1>Why You Choose Us? Get to Know About Us</h1>
      <ul className="about-container">
        <li className="about-list">
          <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" alt="Profile" />
          <h3>All Professionals</h3>
          <p>Amet Minim mollit non deserunt ullamco est sit alicua dolor do amet sint velit offica</p>
        </li>
        <li className="about-list">
          <img src="https://cdn-icons-png.flaticon.com/256/508/508312.png" alt="Secure" />
          <h3>Fully Secure</h3>
          <p>Execution Amet Minim mollit non deserunt ullamco est sit alicua dolor do amet sint velit offica</p>
        </li>
        <li className="about-list">
          <img src="https://cdn-icons-png.flaticon.com/256/2854/2854545.png" alt="Happy Patients" />
          <h3>Happy Patients</h3>
          <p>Amet Minim mollit non deserunt ullamco est sit alicua dolor do amet sint velit offica</p>
        </li>
        <li className="about-list">
          <img src="https://cdn-icons-png.flaticon.com/256/10857/10857148.png" alt="24 Hours Support" />
          <h3>24 Hours Support</h3>
          <p>Amet Minim mollit non deserunt ullamco est sit alicua dolor do amet sint velit offica</p>
        </li>
      </ul>
      <PatientDetails/>
    </div>
  );
}

export default About;
