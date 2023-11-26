// src/App.js
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FindDoctor from "./components/FindDoctor";
import OurService from "./components/OurService";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <h1 style={styles.heading}>Elderly Health Monitoring System</h1>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

const styles = {
  heading: {
    color: "blue",
    textAlign:"center",
    fontFamily:"font-family: 'Work Sans', sans-serif;"
  },
};
export default App;
