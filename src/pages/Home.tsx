import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "@fontsource/montserrat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import '../styles/check.css';
import NavBar from '../components/NavFooter.tsx'

Modal.setAppElement('#root'); // Required for screen readers

const Home: React.FC = () => {
    const navigate = useNavigate(); 
    const [modalIsOpen, setModalIsOpen] = useState(false); // Modal state

    // Open the modal
    const openModal = () => {
        setModalIsOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="full-page">
            {/* Nav Bar */}
            <div className="nav-bar">
                <NavBar />
            </div>
            
            {/* Group name header */}
            <div className="group-header">
                Soraya's Pact Dashboard
            </div>

            {/* Checklist section */}
            <div className="full-checklist">
                <div className="title-header" style={{color: "#7F9A93", fontSize: "30px"}}>
                    Welcome Back! 
                </div>

                {/* My Groups Section with Plus Icon */}
                <div className="title-header" style={{marginTop: "40px", display: "flex", alignItems: "center", color: "#7F9A93"}}>
                    MY GROUPS
                    <FontAwesomeIcon 
                        icon={faPlus} 
                        style={{marginLeft: "10px", cursor: "pointer"}} 
                        onClick={openModal} 
                    />
                </div>

                {/* Example group */}
                <div className="groupcontainer" style={{marginTop: "20px", cursor: "pointer"}} onClick={() => navigate('/check')}>
                    <div className="groups">
                        <div className="group-text" style={{fontSize:"28px"}}>healthy hackers &hearts;</div>
                    </div>
                    <div className="groups" style={{marginTop:"50px"}}>
                        <div className="group-text" style={{fontSize:"28px"}}>we love pact ❤️‍🔥</div>
                    </div>
                    <div className="groups" style={{marginTop:"50px"}}>
                        <div className="group-text" style={{fontSize:"28px"}}> gr8 meditators 🧘🏽‍♀️</div>
                    </div>
                    <div className="groups" style={{marginTop:"50px"}}>
                        <div className="group-text"style={{fontSize:"28px"}}>beavers 🦫</div>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                contentLabel="Group Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <h2>Create or Join a Group</h2>
                <div className="modal-buttons">
                    <button onClick={() => navigate('../CreateGroup')} className="modal-button">Create Group</button>
                    <button onClick={() => navigate('/check')} className="modal-button">Join Group</button>
                </div>
                <button className="close-button" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Home;
