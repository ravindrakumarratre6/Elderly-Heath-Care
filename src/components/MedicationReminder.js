import React from 'react';

const MedicationReminder = ({ medicationTaken, onMedicationTaken }) => {
  console.log("medicationTaken", medicationTaken);

  return (
    <div>
      <h2>Medication Reminder</h2>
      <p>Have you taken your medication today?</p>
      <button onClick={onMedicationTaken} disabled={medicationTaken}>
        {medicationTaken ? 'Medication Taken' : 'Take Medication'}
      </button>
    </div>
  );
};

export default MedicationReminder;
