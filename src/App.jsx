import './styles/css/App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Profil from './pages/Profil';
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


const App = () =>{
  return (
    <div className="App">
        <Header />
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/profil/:id" element={<Profil />} />
                <Route path="/*" element={<Navigate to="/profil/12" />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
