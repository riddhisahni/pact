import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import '../styles/check.css';
import NavBar from '../components/NavFooter.tsx'

const Home: React.FC = () => {
    const navigate = useNavigate(); // Create a navigate function

  // Handle navigation when groupcontainer is clicked
  const handleGroupClick = () => {
    navigate('/check'); // Redirect to the /check page
  };

  return (
    <div className="full-page">
        {/* Group name header */}
        <div className = "nav-bar">
                <NavBar />
        </div>
        <div className="group-header">
            Soraya's Pact Dashboard
        </div>
        {/* Checklist section */}
        <div className="full-checklist">
            <div className="title-header" style = {{color: "#7F9A93", fontSize: "30px"}}>
                Welcome Back! 
            </div>
            <div className="title-header" style = {{marginTop: "40px"}}>
                MY GROUPS
            </div>
            <div className = "groupcontainer" style = {{marginTop: "20px", cursor: "pointer"}} onClick={handleGroupClick}>
                <div className = "groups">
                    <div className = "group-text">Group Name</div>
                </div>
        </div>
        </div>
    </div>
  );
};

export default Home;
