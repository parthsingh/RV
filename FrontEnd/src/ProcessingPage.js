// ProcessingPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessingPage = () => {
  const navigate = useNavigate();

  // Automatically navigate to output page after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push('/App.js');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, );

  return (
    <div>
      <h2>Processing...</h2>
      <div className="loader"></div> {/* Add your animation wheel here */}
    </div>
  );
};

export default ProcessingPage;
