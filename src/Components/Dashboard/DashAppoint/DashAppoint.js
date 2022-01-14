import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Dribble from "../../../images/dribbble_1.gif"
const DashAppoint = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
    const [appointments, setAppointments] = useState([]);
    const options = { day: 'numeric', year: 'numeric', month: 'short' };
    const setDate = ((new Date(selectedDate)).toLocaleDateString('en-US', options));

    const handleDateChange = date => {
        setSelectedDate(date)

    };
    // console.log(new Date(new Date().setHours(0,0,0,0)))
    // console.log(new Date(selectedDate))

    useEffect(() => {
        fetch(`http://localhost:5000/appointmentByDate`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate]);

    return (
        <section style={{ backgroundColor: "#f4fffb" }} >
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 p-4">
                    <div className="py-3">
                        <h4 className="secondary-text">
                            Appointments
                        </h4>
                    </div>
                    <div className="row pt-3">
                        <div style={{ marginRight: "4em" }} className="col-md-5">
                            <div className="shadow bg-white p-5">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={(new Date(selectedDate))}
                                />
                            </div>
                        </div>
                        <div className="col-md-5 shadow bg-white p-4">
                            {appointments.length ? <><div className="d-flex justify-content-between align-items-center p-2 ">
                                <h5 className='primary-text'>Appointments {appointments.length}</h5>
                                <h5 className='primary-text'>{setDate}</h5>
                            </div>
                                <AppointmentsByDate appointments={appointments} /> </> :
                                <><h5 className="primary-text">No Appointments for {setDate}</h5>
                                    <img style={{ width: "100%" }} src={Dribble} alt="drible" />

                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashAppoint;