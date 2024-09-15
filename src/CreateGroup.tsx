import React from 'react'
import TextBox from './TextBox'
import PhotoUpload from './PhotoUpload'
import './CreateGroup.css'
import NavBar from './components/NavFooter'

const CreateGroup: React.FC = () => {
  return (
    <div>
      <div className='nav-bar'>
        <NavBar />
      </div>
      <div className='create-body'>
        <h1>Create Group: </h1>
        <h2>Name your group: </h2>
        <TextBox />
        <PhotoUpload />
        <h2>Add goals for your checklist: </h2>
        <TextBox />
        <button className='save-button'>Save</button>
      </div>
    </div>
  );
};

export default CreateGroup;