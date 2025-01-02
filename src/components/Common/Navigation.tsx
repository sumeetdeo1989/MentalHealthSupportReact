import React from 'react';
import { BrowserRouter , Route, Routes, NavLink } from 'react-router-dom';
function Navigation() {
  return (
      <nav className="navbar navbar-expand-sm bg-light navbar-dark d-flex justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/user">
              User
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/doctor">
              Doctor
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/doctorlist">
              Doctor list
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/appointmentlist">
            Appointment list
            </NavLink>
          </li>

        </ul>
      </nav>
  );
}
export default Navigation;