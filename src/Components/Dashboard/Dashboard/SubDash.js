import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import axios from 'axios';
import TableSubDash from './TableSubDash';


const SubDash = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/appointments`)
            .then(res => setAppointments(res.data.reverse().slice(0, 15)))
    }, [])

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between py-4">
                <h5 className='primary-text'>Recent Appointment {appointments.length}</h5>
                <h4>Calender</h4>
            </div>
            <Scrollbars style={{ height: "50vh", width: "100%" }}>
                <table className="table bg-white p-4">
                    <thead>
                        <tr>
                            <th className="col-md-1">Sr.No</th>
                            <th className="col-md-2 text-center">Name</th>
                            <th className="col-md-1 text-center">Gender</th>
                            <th className="col-md-2 text-center">Date</th>
                            <th className="col-md-1">Weight</th>
                            <th className="col-md-2 text-center">Contact</th>
                            <th className="col-md-3 text-center">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <TableSubDash key={appointment._id} index={index} appointment={appointment} />)
                        }
                    </tbody>
                </table>
            </Scrollbars>
        </div>
    );
};

export default SubDash;