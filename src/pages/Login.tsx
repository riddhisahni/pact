
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import OriginalPage from '@/OriginalPage';
import Welcome from "@/Welcome.tsx";
import Home from "@/pages/Home.tsx"
import Check from "@/pages/Check.tsx"
import Button from '@/Button';

function Login() {
    return (
        <header>
          <SignedOut>
            <OriginalPage />
            {/* <SignInButton>
            <button className='button'>Sign In!</button>
          </SignInButton> */}
          </SignedOut>
          <SignedIn>
            {/* <UserButton> */}
            {/* <UserButton/>
              <button className='logout'>Log Out!</button> */}
            <Home />
          </SignedIn>
        </header> 

    )
}

export default Login;
