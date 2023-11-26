import React, { useState, useEffect } from "react";
import MedicationReminder from "./MedicationReminder";

const HealthMonitor = () => {
  const [healthData, setHealthData] = useState({
    heartRate: 75,
    bloodPressure: "120/80",
  });
  const [medicationTaken, setMedicationTaken] = useState(false);

  const updateHealthData = async () => {
    try {
      // Replace 'https://your-api-endpoint.com/healthdata' with your actual API endpoint
      const response = await fetch('https://your-api-endpoint.com/healthdata');

      if (!response.ok) {
        throw new Error("Failed to fetch health data");
      }

      // Parse the response JSON
      const newHealthData = await response.json();

      console.log("newHealthData", newHealthData);
      setHealthData((prevHealthData) => ({
        ...prevHealthData,
        ...newHealthData,
      }));
    } catch (error) {
      console.error("Error fetching health data:", error.message);
    }
  };

  useEffect(() => {
    updateHealthData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <h2>Health Monitor</h2>
      <p>Heart Rate: {healthData.heartRate} BPM</p>
      <p>Blood Pressure: {healthData.bloodPressure}</p>
        <MedicationReminder
          medicationTaken={medicationTaken}
          onMedicationTaken={() => setMedicationTaken(true)}
        />
    </div>
  );
};

export default HealthMonitor;
