import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; 
import './classiification.css'

export default function ImageClassificationPage() {
  const [step, setStep] = useState('upload'); 
  const [uploadedImage, setUploadedImage] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setUploadedImage(url);
    setStep('preview');

    // Simulate processing delay and classification result
    setTimeout(() => {
      const results = {
        diagnosis: 'A fine crack was detected in the upper right cell with hotspots.',
        tips: '• Turn off the system and clean the surface.\n• Replace the damaged panel if the spots persist.\n• Monitor the panel temperature regularly.',
        probabilities: {
          'Crack': 0.85,
          'Hotspot': 0.10,
          'Normal': 0.05,
        },
      };

      setClassificationResult(results);
      setStep('result');
    }, 2500);
  };

  const handleDownload = () => {
    Swal.fire({
      title: 'Downloading...',
      text: 'Your result is being downloaded.',
      icon: 'info',
      timer: 2000,
      timerProgressBar: true,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  };

  return (
    <div className="classification-page">
      <motion.h1
        className="title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Solar AI: Panel Fault Classification and Detection
      </motion.h1>

      <motion.div
        className="card upload-card"
        data-aos="fade-up"
        whileHover={{ scale: 1.02 }}
      >
        <label htmlFor="fileInput" className="upload-label">
          Choose an image or drag it here
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="file-input"
          onChange={handleUpload}
        />
      </motion.div>

      {step === 'preview' && (
        <div className="loader-wrapper">
          <div className="spinner"></div>
          <p>Processing the image...</p>
        </div>
      )}

      {step === 'result' && classificationResult && (
        <>
          <motion.div
            className="card"
            data-aos="fade-up"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="card-title">Original Image</h2>
            <img src={uploadedImage} alt="Original" className="img-preview" />
          </motion.div>

          <motion.div
            className="card"
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="card-title">Analysis Result</h2>
            <div className="tips-section">
              <h3>Defect Description:</h3>
              <p>{classificationResult.diagnosis}</p>

              <h3>Repair Tips:</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{classificationResult.tips}</p>

              <h3>Probabilities:</h3>
              <ul>
                {Object.entries(classificationResult.probabilities).map(([key, value]) => (
                  <li key={key}>{key}: {(value * 100).toFixed(2)}%</li>
                ))}
              </ul>

              <div className="feedback">
                <span>Rate the accuracy of the analysis:</span>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className={`star ${rating >= num ? 'filled' : ''}`}
                    onClick={() => setRating(num)}
                  >
                    ★
                  </button>
                ))}
              </div>

              <button className="download-btn" onClick={handleDownload}>
                Download Result
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}