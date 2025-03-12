import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./faultdetection.css";

function FaultDetection() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fault-detection-container">
      <h2 className="title">Upload Solar Panel Image</h2>
      <div className="upload-box">
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <>
            <FaCloudUploadAlt className="upload-icon" />
            <p>Drag & drop an image or click to upload</p>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
          </>
        )}
      </div>
      {image && <button className="upload-btn">Analyze Image</button>}
    </div>
  );
}

export default FaultDetection;
