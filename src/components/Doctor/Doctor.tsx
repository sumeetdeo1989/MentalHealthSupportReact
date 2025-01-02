import React from 'react';
import EditDoctor from './EditDoctor';
const avatar = require('C:/Users/Sumeet Deorukhkar/source/repos/mentalhealth/src/assets/avatar.png');
function Doctor() {
  return (
      <div className="App container">
        <h4 className="d-flex m-3">
          Doctor
        </h4>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 w-50 bd-highlight">
              <div className="input-group mb-3">
                  <span className="input-group-text">First Name</span>
                  <input type="text" className="form-control" />
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text">Last Name</span>
                  <input type="text" className="form-control" />
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text">Qualification</span>
                  <input type="text" className="form-control" />
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text">Speciality</span>
                  <input type="text" className="form-control" />
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text">Gender</span>
                  <select className="form-select">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text">DOB</span>
                  <input type="date" className="form-control" />
              </div>
              <button type="button" className="btn btn-primary float-start" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
              </button>
          </div>
          <div className="p-2 w-50 bd-highlight">
              <img width="250px" height="250px"
                  src={String(avatar)} />
          </div>
        </div>
        
        <EditDoctor />
      </div>
  );
}
export default Doctor;