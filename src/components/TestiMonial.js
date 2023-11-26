// TestiMonial.js
import React from "react";
import { FaStar, FaArrowRight ,FaArrowLeft } from "react-icons/fa";
import "../CSS/TestiMonial.css";

function TestiMonial() {
  return (
    <div className="testimonial-container">
      <p>TESTIMONIAL</p>
      <h1>What Our Patients Say About Us</h1>
      <ul className="testimonial-list">
        <li>
          <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="user" />
          <h3 style={styles.heading}>Guy Hawkins</h3>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p style={styles.paragraph}>Sample testimonial text goes here.</p>
        </li>
        <li>
          <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" alt="user" />
          <h3 style={styles.heading}>Floyd Miles</h3>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p style={styles.paragraph}>Another testimonial text here.</p>
        </li>
        <li>
          <img src="https://t3.ftcdn.net/jpg/02/30/40/74/240_F_230407433_uF2iM6tUs1Sge24999FWdo241t8FMBi7.jpg" alt="user" />
          <h3 style={styles.heading}>Jerome Bell</h3>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p style={styles.paragraph}>More testimonial text for Jerome.</p>
        </li>
      </ul>
      <FaArrowLeft className="arrow-icon-left"/>
      <FaArrowRight className="arrow-icon-right" />
    </div>
  );
}

const styles ={
  heading:{
    textAlign:"center"
  },
  paragraph:{
    textAlign:"center"
  }
}

export default TestiMonial;
