// Contact.js
import React, { useState } from "react";
import "../CSS/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
    contactMethod: "email",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission, e.g., sending data to a server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Preferred Contact Method:
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </label>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}
const styles = {
  button: {
    backgroundColor: " #3498db",
    color: " #fff",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
export default Contact;
