import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, selectDate }) => {
    const { name, visitingHour, totalSpace, } = booking;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () =>  {
        setModalIsOpen(false);
    }

    return (
        <div className='col-md-4 p-2 mb-2'>
            <div className='rounded text-center p-5 m-2  shadow'>
                <h5 className="primary-text">{name}</h5>
                <h6 className="secondary-text">{visitingHour}</h6>
                <p className='text-secondary'>{totalSpace} SPACES AVAILABLE</p>
                <button onClick={openModal} className="primary-btn">
                    BOOK APPOINTMENT
                </button>
                <AppointmentForm name={name} date={selectDate} modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </div>
        </div>
    );
};

export default BookingCard;