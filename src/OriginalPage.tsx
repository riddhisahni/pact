import React from 'react';
import Button from './Button.tsx';
import './OriginalPage.css';
import "@fontsource/montserrat";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const OriginalPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="text">PACT</h1>
      <h2 className="h1">Stronger Together, One Pact at a Time.</h2>
      {/* Conditionally render buttons based on authentication status */}
      <SignedOut>
        <SignInButton redirectUrl='/home' mode="modal" className="custom-signin-button" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* Example custom button */}
      {/* <div><Button label="Get Started" /></div> */}
    </div>
  );
};

export default OriginalPage;