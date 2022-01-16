import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div className='pt-5'>
            <Scrollbars style={{ height: "45vh", width: "100%" }}>
                <table className="table bg-white">
                    <thead>
                        <tr>
                            <th className="col-md-1">Sr.No</th>
                            <th className="col-md-4 text-center">Name</th>
                            <th className="col-md-3 text-center">Gender</th>
                            <th className="col-md-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <tr className='border-0' key={appointment._id}>
                                <th scope="row">
                                    {(index + 1) >= 10 ? (index + 1) : "0" + (index + 1)}
                                </th>
                                <td className='text-center'>{appointment.name}</td>
                                <td className='text-center'>{appointment.gender}</td>
                                <td className='text-center'>
                                    <div className="btn-group">
                                        <button className="btn btn-success btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Large button
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><button className="dropdown-item" type="button">Action</button></li>
                                            <li><button className="dropdown-item" type="button">Another action</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </Scrollbars>
        </div>
    );
};

export default AppointmentsByDate;