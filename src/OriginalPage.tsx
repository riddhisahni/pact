import React from 'react';
import Button from './Button.tsx';
import './OriginalPage.css';

// A functional React component without props
const OriginalPage: React.FC = () => {
  return (
    <div>
      <h1 className="text">PACT</h1>
      <h2 className="h1">Stronger Together, One Pact at a Time.</h2>
      {/* <div><Button label="Get Started" /></div> */}
    </div>
  );
};

export default OriginalPage;
