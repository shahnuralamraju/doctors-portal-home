import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import "./Appointment.css";
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }


    return (
        <div>
            <div className='appointmentHeader-container'>
                <Navbar />
                <AppointmentHeader handleDateChange={handleDateChange} date={selectedDate} />
            </div>
            <BookAppointment date={selectedDate} />
            <Footer />
        </div>
    );
};

export default Appointment;