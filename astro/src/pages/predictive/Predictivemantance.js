import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./predictive.css";

function PredictiveMaintenance() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null); 

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      alert("File uploaded successfully!");
    }
  };

  const handleClickUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv, .xlsx';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
        alert("File uploaded successfully!");
      }
    };
    input.click();
  };

  return (
    <div className="predictive-container">
      <h2 data-aos="fade-down">Upload Data for Predictive Maintenance</h2>
      <div
        className={`upload-box ${dragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        data-aos="zoom-in"
        onClick={handleClickUpload}
      >
        <i className="upload-icon">⬆️</i>
        <p>Drag & drop a CSV/Excel file or click to upload</p>
      </div>
      {file && (
        <div className="file-info">
          <p>Uploaded File: {file.name}</p>
        </div>
      )}
      <button className="analyze-btn" data-aos="fade-up">
        Analyze Data
      </button>
    </div>
  );
}

export default PredictiveMaintenance;