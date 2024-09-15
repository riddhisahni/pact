import React, { useState } from 'react';
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import '../styles/check.css';
import NavBar from '../components/NavFooter.tsx';
import emiphoto from '../images/IMG_0947.png';
import riddhiphoto from '../images/IMG_6037.png';
import evaphoto from '../images/evapic.png';
import leaderboard from '../images/leaderboard.png';

// Modal for posting photos and descriptions
const PostModal: React.FC<{ isOpen: boolean, onClose: () => void, onSubmit: (file: File | null, description: string) => void }> = ({ isOpen, onClose, onSubmit }) => {
    const [photo, setPhoto] = useState<File | null>(null);
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setPhoto(file);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent page reload
        onSubmit(photo, description);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose} style={{ color: "black", marginRight: '20px', marginTop: '11px' }}>✕</button>
                <div className="inside-modal">
                    <h2 className="modal-title" style={{ color: '#7F9A93', marginBottom: '10px' }}>Post Your Progress!</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ marginBottom: '10px' }}
                        />
                        <textarea
                            placeholder="Write a description..."
                            value={description}
                            onChange={handleDescriptionChange}
                            style={{ width: '100%', height: '100px', marginBottom: '10px', background: '#D6DAC8', color: 'black' }}
                        />
                        <button type="submit" style={{ backgroundColor: '#7F9A93', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Modal for displaying the leaderboard
const LeaderboardModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose} style={{ color: "black", marginRight: '20px', marginTop: '11px' }}>✕</button>
                <div className="inside-modal">
                    <h2 className="modal-title" style={{ color: '#7F9A93', marginBottom: '10px' }}>Leaderboard 👑</h2>
                    <div className="member">1. Emi (32🔥)</div>
                    <div className="member">2. Eva (31🔥)</div>
                    <div className="member">3. Riddhi (30🔥)</div>
                    <div className="member">4. Soraya (28🔥)</div>
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

    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);
    const [postedPhotos, setPostedPhotos] = useState<{ fileUrl: string, description: string }[]>([]);

    const handleCheckboxChange = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, checked: !task.checked } : task
            )
        );
    };

    const openPostModal = () => setIsPostModalOpen(true);
    const closePostModal = () => setIsPostModalOpen(false);

    const openLeaderboardModal = () => setIsLeaderboardModalOpen(true);
    const closeLeaderboardModal = () => setIsLeaderboardModalOpen(false);

    const handleSubmit = (file: File | null, description: string) => {
        if (file && description) {
            const fileUrl = URL.createObjectURL(file); // Create a temporary URL for the uploaded photo
            setPostedPhotos((prevPhotos) => [...prevPhotos, { fileUrl, description }]);
        }
    };

    return (
        <div className="full-page">
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="group-header">
                <span>Healthy Hackers &hearts; </span>
                <img
                    src={leaderboard}
                    className="modal-open-button"
                    onClick={openLeaderboardModal}
                    style={{ width: '40px', height: '40px', cursor: "pointer", marginLeft: "200px" }}
                    alt="Open Leaderboard Modal"
                />
            </div>
            

            
            
            <div className="full-checklist">
                <div className="title-header" style={{ color: "#7F9A93" }}>
                    OUR PACTS - DAY 32/75
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
                <div className="title-header" style={{ color: "#7F9A93" }}>
                    ACTIVITY
                </div>

                <div className="photo-upload">
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
                            Eva: 100 pullups down!! #ilovepact
                        </div>
                    </div>
                    {/* Render newly posted photos and descriptions */}
                    {postedPhotos.map((photo, index) => (
                        <div key={index} style={{ marginTop: '10px' }}>
                            <img
                                className="predefined-photo"
                                src={photo.fileUrl}
                                alt={`User-uploaded ${index + 1}`}
                            />
                            <div className="photo-caption">
                                Soraya: {photo.description}
                            </div>
                        </div>
                    ))}
                    <button className="take-photo-button" style={{ marginLeft: 90 }} onClick={openPostModal}>
                        Post
                    </button>
                </div>
            </div>
            {/* Modals */}
            <PostModal isOpen={isPostModalOpen} onClose={closePostModal} onSubmit={handleSubmit} />
            <LeaderboardModal isOpen={isLeaderboardModalOpen} onClose={closeLeaderboardModal} />
        </div>
    );
};

export default Check;
