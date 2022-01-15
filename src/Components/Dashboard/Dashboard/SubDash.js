import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import TableSubDash from './TableSubDash';


const SubDash = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/appointments`)
            .then(res => setAppointments(res.data.reverse()))
    }, []);
  
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
                            <th scope='col' className="text-center">Sr.No</th>
                            <th scope='col' className="text-center">Name</th>
                            <th scope='col' className="text-center">Gender</th>
                            <th scope='col' className="text-center">Date</th>
                            <th scope='col' className="text-center">Weight</th>
                            <th scope='col' className="text-center">Contact</th>
                            <th scope='col' className="text-center">Action</th>
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