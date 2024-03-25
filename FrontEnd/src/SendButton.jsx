// SendButton.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SendButton = ({ onSend, file }) => {
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!file) {
      alert('Please upload a file before sending.');
      return;
    }
    
    setProcessing(true); // Set processing to true when send button is clicked

    try {
      await onSend(file); // Pass the file to the onSend function
      // After sending the file, navigate to the processing page
      navigate('/processing');
    } catch (error) {
      console.error('Error sending file:', error.message);
      alert('Failed to send file. Please try again.');
      setProcessing(false); 
    }
  };

  return (
    <button onClick={handleClick} disabled={processing}>
      {processing ? 'Sending...' : 'Send'}
    </button>
  );
};

export default SendButton;
