import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Scrollbars } from 'react-custom-scrollbars';

const Patient = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointments`)
            .then(res => res.json())
            .then(data => setAppointments(data));
    },[])


    return (
        <section style={{ backgroundColor: "#f4fffb" }} >
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-8 p-2 ms-3">
                    <div className="py-3">
                        <h4 className="secondary-text">
                            Patients
                        </h4>
                    </div>
                    <div className="row ms-2 px-4 pb-5 bg-white shadow">
                        <div className="d-flex align-items-center justify-content-between py-4">
                            <h5 className='primary-text'>All Patients {appointments.length}</h5>
                            <h4>Calender</h4>
                        </div>
                        <Scrollbars style={{ height: "65vh" , width:"100%"}}>
                        <table className="table bg-white p-4">
                            <thead>
                                <tr>
                                    <th className="col-md-1">Sr.No</th>
                                    <th className="col-md-2 text-center">Name</th>
                                    <th className="col-md-2 text-center">Gender</th>
                                    <th className="col-md-1 text-center">Age</th>
                                    <th className="col-md-1">Weight</th>
                                    <th className="col-md-2 text-center">Contact</th>
                                    <th className="col-md-3 text-center">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        appointments.map((appointment, index) => <tr key={appointment._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td className='text-center'>{appointment.name}</td>
                                            <td className='text-center'>{appointment.gender}</td>
                                            <td className='text-center'>{appointment.age}</td>
                                            <td className='text-center'>{appointment.weight}</td>
                                            <td className='text-center'>{appointment.number}</td>
                                            <td className='text-center'>{appointment.address}</td>
                                        </tr>)
                                    }
                            </tbody>
                        </table>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Patient;