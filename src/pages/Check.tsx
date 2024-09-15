import React, { useState } from 'react';
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import '../styles/check.css';
import NavBar from '../components/NavFooter.tsx';
import emiphoto from '../images/IMG_0947.png';
import riddhiphoto from '../images/IMG_6037.png';
import leaderboard from '../images/leaderboard.png';
import evaphoto from '../images/evapic.png';

// Modal Component
const Modal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} style = {{color: "black", marginRight: '20px', marginTop: '11px'}}>✕</button>
        <div className = "inside-modal">
            <h2 className = "modal-title">Leaderboard 👑</h2>
            <div className = "member">1. Emi (32 🔥)</div>
            <div className = "member">2. Eva (31 🔥) </div>
            <div className = "member">3. Riddhi (30 🔥)</div>
            <div className = "member">4. Soraya (28 🔥)</div>
        </div>
      </div>
    </div>
  );
};

const Check: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: '45 min. workout', checked: false },
    { id: 2, text: 'Drink 1 gallon water', checked: false },
    { id: 3, text: 'Read 10 pages', checked: false },
  ]);
  const [photo, setPhoto] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setPhoto(file);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="full-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="group-header">
        <span>Team HackMIT!!</span>
        <img src = {leaderboard} className="modal-open-button" onClick={openModal} style={{ width: '40px', height: '40px', cursor: "pointer", marginLeft: "200px"}}></img>
      </div>
      <div className="full-checklist">
        <div className="title-header">
          OUR PACTS - DAY 32
        </div>
        <ul style={{ listStyleType: 'none' }}>
          {tasks.map((task) => (
            <li key={task.id}>
              <label style={{ fontSize: '19px', marginTop: '10px' }}>
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => handleCheckboxChange(task.id)}
                  style={{ transform: 'scale(1.5)', marginRight: '18px' }}
                />
                {task.text}
              </label>
            </li>
          ))}
        </ul>
        <div className="title-header">
          ACTIVITY
        </div>
        <div className="photo-upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="file-input"
            style={{ display: 'none' }}
          />
          <div style={{ marginTop: '20px' }}>
            <img
              className="predefined-photo"
              src={emiphoto}
              alt="Predefined Example"
            />
            <div className="photo-caption">
              Emi: Just hit push!!! #dailyworkout #yay #ilovethisapp
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <img
              className="predefined-photo"
              src={riddhiphoto}
              alt="Predefined Example"
            />
            <div className="photo-caption">
              Riddhi: 1 gallon down!! #hydrated #bestappever
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <img
              className="predefined-photo"
              src={evaphoto}
              alt="Predefined Example"
            />
            <div className="photo-caption">
              Eva: 100 pullups down!! #sweatshirtacquired #ilovepact
            </div>
          </div>

          <label htmlFor="file-input">
            <button className="take-photo-button" style={{ marginLeft: 40, marginTop: 20 }}>
              Take Photo
            </button>
          </label>
          {photo && (
            <div className="photo-preview">
              <img
                src={URL.createObjectURL(photo)}
                alt="Uploaded Preview"
              />
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Check;
