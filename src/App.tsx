import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Results from "./pages/Results";
import AdminDashboard from "./pages/staff/AdminDashboard";
import DoctorDashboard from "./pages/staff/DoctorDashboard";
import RootDashboard from "./pages/staff/RootDashboard";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/results" element={<Results/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="/doctor" element={<DoctorDashboard/>} />
            <Route path="/root" element={<RootDashboard/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
