// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add custom styles here

function App() {
  return (
    <Router>
      <div className="App text-center">
        {/* Hero Section */}
        <header className="my-3">
          <div className="container">
            <h1 className="mb-4">Adopta un Robot con Robot Lovers!</h1>
            <hr className="border-gray" />
            <img src="/HeroImg.png" alt="Robots" className="img-fluid" />
            <hr className="border-gray mt-4" />
          </div>
        </header>

        {/* Main Content */}
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/robots" element={<RobotList />} />
            <Route path="/robots/:id" element={<RobotDetail />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-light py-3">
          <div className="container">
            <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
