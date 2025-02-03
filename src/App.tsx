import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { SignIn } from './pages/SignIn';
import { EmailSignIn } from './pages/EmailSignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin/email" element={<EmailSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;