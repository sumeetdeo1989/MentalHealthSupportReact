import React from 'react';
function AppointmentList() {
  return (
      <div className="App container">
        <h4 className="d-flex m-3">
            Appointment List
        </h4>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Date / Time</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>31-12-2024 / 12:30 PM</td>
                <td>
                    <button type="button" className="btn btn-success btn-sm m-1">Approve</button>
                    <button type="button" className="btn btn-warning btn-sm m-1">Reject</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>31-12-2024 / 02:30 PM</td>
                <td>
                    <button type="button" className="btn btn-success btn-sm m-1">Approve</button>
                    <button type="button" className="btn btn-warning btn-sm m-1">Reject</button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Freeman</td>
                <td>31-12-2024 / 04:30 PM</td>
                <td>
                    <button type="button" className="btn btn-success btn-sm m-1">Approve</button>
                    <button type="button" className="btn btn-warning btn-sm m-1">Reject</button>
                </td>
                </tr>
            </tbody>
        </table>
      </div>
  );
}
export default AppointmentList;