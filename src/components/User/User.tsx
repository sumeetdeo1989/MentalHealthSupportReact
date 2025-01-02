import React from 'react';
const avatar = require('C:/Users/Sumeet Deorukhkar/source/repos/mentalhealth/src/assets/avatar.png');
function User() {
  return (
      <div className="App container">
        <h4 className="d-flex m-3">
          User
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
        

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="d-flex flex-row bd-highlight mb-3">
                  <div className="p-2 bd-highlight">
                      <div className="input-group mb-3">
                          <span className="input-group-text">First Name</span>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="input-group mb-3">
                          <span className="input-group-text">Last Name</span>
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
                    <div className="input-group mb-3">
                        <input className="m-2" type="file" />
                    </div> 
                  </div>        
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
export default User;