import './App.css';
import React from 'react';
import Header from './components/Common/Header';
import Navigation from './components/Common/Navigation';
import Footer from './components/Common/Footer';
import User from './components/User/User';
import Doctor from './components/Doctor/Doctor';
import DoctorList from './components/Doctor/DoctorList';
import AppointmentList from './components/Appointments/AppointmentList';
import { BrowserRouter , Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctorlist" element={<DoctorList />} />
          <Route path="/appointmentList" element={<AppointmentList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
    
  );
}
export default App;
