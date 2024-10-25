import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className='container-fluid'> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
