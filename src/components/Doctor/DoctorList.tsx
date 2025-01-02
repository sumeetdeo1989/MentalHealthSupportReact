import { useState } from 'react';
import React from 'react';
import AddDoctor from './AddDoctor';
const avatar = require('C:/Users/Sumeet Deorukhkar/source/repos/mentalhealth/src/assets/avatar.png');

function DoctorList() {
  return (
      <div className="App container">
        <div className="m-3"  style={{display: "flow-root"}}>
            <h4 className="m-3" style={{float: "left"}}>Doctor</h4>
            <button type="button" className="btn btn-primary"  style={{float: "right"}} data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
        </div>

        <div className="container text-center">
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <img src={String(avatar)} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <img src={String(avatar)} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AddDoctor />
      </div>
  );
}
export default DoctorList;