
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import OriginalPage from '@/OriginalPage';
import Welcome from "@/Welcome.tsx";
import Home from "@/pages/Home.tsx"
import Check from "@/pages/Check.tsx"

function Login() {
    return (
        <header>
      <SignedOut>
        <OriginalPage />
        <SignInButton>
        <button className='button'>Sign In!</button>
      </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
        <Home />
      </SignedIn>
</header> 

    )
}

export default Login;
