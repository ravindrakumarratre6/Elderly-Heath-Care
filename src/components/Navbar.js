import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
export default function Navbar() {
  return (
    <ul className="nav-container">
      <li className="nav-list">
        <Link>
          <img
            src="https://img.freepik.com/free-vector/elderly-people-holding-health-icons_53876-43068.jpg?w=2000"
            alt="medical care"
          />
        </Link>
      </li>
      <li className="nav-list">
        <Link to="">Home</Link>
      </li>
      <li className="nav-list">
        <Link to="/finddoctor">Find-Doctor</Link>
      </li>
      <li className="nav-list">
        <Link to="/ourservice">OurService</Link>
      </li>
      <li className="nav-list">
        <Link to="/about">About Us</Link>
      </li>
      <li className="nav-list">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="nav-list">
        <Link to="/signup">
          <button style={styles.button1}>Sign up</button>
        </Link>
      </li>
      <li className="nav-list">
        <Link to="/login">
          <button  style={styles.button}>Log in</button>
        </Link>
      </li>
    </ul>
  );
}
const styles ={
  button:{
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "7px",
    border: "none",
    borderRadius: "2px",
    cursor:" pointer"
  },
  button1:{
    border:"none",
    color:"black",
    padding:"5px"
  }
}