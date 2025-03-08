import React, { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import "./Activities.css";

function Activities() {
  const missions = [
    "Vote for a proposal",
    "Complete a survey",
    "Participate in a discussion",
    "Share an event on social media",
    "Invite a friend to join",
    "Like & comment on a post",
  ];

  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile);
      setFilePreview(fileURL);
      console.log("File URL:", fileURL); // Debugging
    }
  };

  const handleUpload = () => {
    if (file) {
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 5000); // Hide message after 5s
    }
  };

  return (
    <div className="activities-container">
      {/* Daily Mission Box */}
      <div className="box mission-box">
        <h2>Daily Mission</h2>
        <p className="subtitle">Complete Mission To Earn Token!</p>
        <ul>
          {missions.map((mission, index) => (
            <li key={index}>{mission}</li>
          ))}
        </ul>
      </div>

      {/* File Upload Box */}
      <div className="box upload-box">
        <h2>Upload Your File</h2>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button onClick={handleUpload}>Upload</button>
        {uploadSuccess && <p className="success-message">Uploaded Successfully!</p>}

        {/* Upload Icon */}
        <div className="upload-icon">
          <MdDriveFolderUpload size={50} color="white" />
        </div>

        {/* Image Preview Below Icon */}
        {filePreview && (
          <div className="image-preview">
            <img src={filePreview} alt="Uploaded Preview" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Activities;