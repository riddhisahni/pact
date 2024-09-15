import React from 'react'
import TextBox from './TextBox.tsx'
import PhotoUpload from './PhotoUpload.tsx'
import './CreateGroup.css';

// Functional React component that displays "Hi"
const Hi: React.FC = () => {
  return (
    <div>
      <h1>Create Group: </h1>
      <h2>Name your group: </h2>
      <TextBox />
      <PhotoUpload />
      <h2>Add goals for your checklist: </h2>
      <TextBox />
    </div>
  );
};

export default Hi;
