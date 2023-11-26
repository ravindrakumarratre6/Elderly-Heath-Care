
import React from 'react'
import "../CSS/PatientDetails.css"
function PatientDetails() {
  return (
    <div className='patients-containter'>
      <ul className='patients-list-container'>
        <li className='patients-list'>
          <h1>300+</h1>
          <p>Regular Patients</p>
        </li>
        <li className='patients-list'>
          <h1>1000+</h1>
          <p>Patients Capacity</p>
        </li>
        <li className='patients-list'>
          <h1>150+</h1>
          <p>Expert Doctor</p>
        </li>
        <li className='patients-list'>
          <h1>05+</h1>
          <p>Years Experience</p>
        </li>
      </ul>
    </div>
  )
}

export default PatientDetails