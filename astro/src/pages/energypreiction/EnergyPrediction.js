import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./energyprediction.css";

function EnergyPrediction() {
  const [fileName, setFileName] = useState("");
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // تفعيل الأنيميشن عند التمرير
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setPrediction(Math.floor(Math.random() * 500) + 100); // محاكاة تنبؤ عشوائي
    }
  };

  return (
    <div className="energy-prediction-container">
      <h2 className="title" data-aos="fade-up">Upload Data for Energy Prediction</h2>
      
      <div className="upload-box" data-aos="zoom-in">
        {fileName ? (
          <p className="file-name">{fileName}</p>
        ) : (
          <>
            <FaCloudUploadAlt className="upload-icon" />
            <p>Drag & drop a CSV/Excel file or click to upload</p>
            <input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} className="file-input" />
          </>
        )}
      </div>

      {fileName && (
        <button className="upload-btn" data-aos="fade-up">Analyze Data</button>
      )}

      {prediction && (
        <div className="result-box" data-aos="flip-left">
          <h3>Predicted Energy Output:</h3>
          <p>{prediction} kWh</p>
        </div>
      )}
    </div>
  );
}

export default EnergyPrediction;

