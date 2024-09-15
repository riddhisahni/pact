// Welcome.tsx
import React from 'react'
import Button from './Button.tsx'
import { Link } from 'react-router-dom';
import './Welcome.css';

// Defining the type for props
interface WelcomeProps {
  name: string;
  age: number;
}


// A functional React component using TSX
const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div>
      <h1 className = "text">Welcome to Pact!</h1>
      <Link to="/newgroup">
        <div className = "spacing"><Button label="Create Group" /></div>
      </Link>
      <Link to="/check">
        <div><Button label="Join Group"/></div>
      </Link>
    </div>
  );
};

export default Welcome;
