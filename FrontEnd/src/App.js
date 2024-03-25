// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import UploadButton from './UploadButton';
import SendButton from './SendButton';
import ProcessingPage from './ProcessingPage'; 
import Output from './Output'; 
import './App.css';

const App = () => {
  const [file, setFile] = useState(null); 

  const handleFileUpload = (file) => {
    // Store the uploaded file in component state
    setFile(file);
  };

  const handleSend = async (file) => {
    // Simulate sending file to backend (replace this with your actual backend API call)
    console.log("Sending file to backend...");
    console.log("File data:", file);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 3000)); 
    console.log("File sent successfully!");
  };

  return (
    <Router>
      <div>
        <NavigationBar className="navigation" title="Research Image Generation" />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <div className="button-container">
                <UploadButton onFileUpload={handleFileUpload} />
                <SendButton onSend={handleSend} file={file} />
              </div>
            } />
            <Route path="/processing" element={<ProcessingPage />} />
            <Route path="/output" element={<Output />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
