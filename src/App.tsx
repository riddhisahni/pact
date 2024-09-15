import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import Check from "./pages/Check.tsx"
import Login from "./pages/Login.tsx"
import Home from "./pages/Home.tsx"
import JoinGroup from "./pages/JoinGroup.tsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/join" element= {<JoinGroup />} />
        <Route path="/Home" element= {<Home />} />
        <Route path="/check" element={<Check />} />
        <Route path="/login" element= {<Login />} />
        {/* <Route path="/newgroup" element={<NewGroup />} /> */}
      </Routes>
    </BrowserRouter>
    // <header>
    //   <SignedOut>
    //     <SignInButton />
    //   </SignedOut>
    //   <SignedIn>
    //     <UserButton />
    //     <Home />
    //   </SignedIn>
    // </header>
  );
}