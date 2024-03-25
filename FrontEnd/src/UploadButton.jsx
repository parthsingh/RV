// UploadButton.js
import React, { useState } from 'react';

const UploadButton = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && isValidFile(file)) {
      setSelectedFile(file);
      onFileUpload(file);
    } else {
      alert('Please upload a PDF or DOCX file of size up to 10MB.');
    }
  };

  // Function to check if the selected file meets the criteria
  const isValidFile = (file) => {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    return (
      allowedTypes.includes(file.type) &&
      file.size <= maxSize 
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default UploadButton;
