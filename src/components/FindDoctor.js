// FindDoctor.js
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaStar } from "react-icons/fa";
import "../CSS/Finddoctor.css";

function FindDoctor() {
  const doctors = [
    {
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      img:"https://i.ibb.co/HVfpDq4/images-removebg-preview.png",
      rating: 5.0,
      reviewCount: 300,
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/drjohnsmith",
        facebook: "https://www.facebook.com/drjohnsmith",
        twitter: "https://twitter.com/drjohnsmith",
      },
    },
    {
      name: "Dr. Jenny Welson",
      specialization: "Neurologist",
      img:"https://cancermiraj.com/wp-content/uploads/2018/02/img-doctor.png",
      rating: 5.0,
      reviewCount: 260,
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/drjennywelson",
        facebook: "https://www.facebook.com/drjennywelson",
        twitter: "https://twitter.com/drjennywelson",
      },
    },
    {
      name: "Dr. Kristin Waston",
      specialization: "Orthopedist",
      img:"https://i.ibb.co/9sCCVSZ/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTEw-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV80-X2tpbm-Rf-ZG9jd.png",
      rating: 5.0,
      reviewCount: 200,
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/drkristinwaston",
        facebook: "https://www.facebook.com/drkristinwaston",
        twitter: "https://twitter.com/drkristinwaston",
      },
    },
  ];

  return (
    <div className="finddoctor-main-container">
      <p>OUR DOCTORS</p>
      <h1>MEET Our Professional Doctors</h1>
      <div className="finddoctor-list-container">
        <ul className="finddoctor-details">
          {doctors.map((doctor, index) => (
            <li key={index} className="finddoctor-list">
              <img src={doctor.img}alt="img" />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <div className="rating">
                <p style={{color:"yellow"}}>
                  <FaStar /> <span></span>
                </p> 
                <p>{doctor.rating.toFixed(1)}</p>
                <p>({doctor.reviewCount}+ Reviews)</p>
              </div>
              <ul className="social-icons">
                <li >
                  <a
                    href={doctor.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href={doctor.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href={doctor.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FindDoctor;
