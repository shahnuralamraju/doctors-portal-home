import React from 'react';
import Chair from "../../../../images/chair.png"
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import "./AppointmentHeader.css";

const AppointmentHeader = ({ handleDateChange, date }) => {

    console.log(date)

    return (
        <main style={{ height: "635px" }} className='container d-flex align-items-center'>
            <div className="row  d-flex align-items-center justify-content-between mt-5 pt-5">
                <div className="col-md-5">
                    <h1 className='secondary-text'>Appointment</h1>
                    <div className="calendar-container">
                        <Calendar
                            onChange={handleDateChange}
                            value={date}
                        />
                    </div>
                </div>

                <div className="col-md-7">
                    <img src={Chair} alt="chair" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;