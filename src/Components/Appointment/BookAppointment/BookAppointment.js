import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        visitingHour: "10:50 AM - 11:30 AM",
        totalSpace: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        visitingHour: "5:00 PM - 6:30 PM",
        totalSpace: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        visitingHour: "7:00 PM - 8:30 PM",
        totalSpace: 10
    },
    {
        id: 5,
        name: "Teeth Orthodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        id: 6,
        name: "Teeth Orthodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
]

const BookAppointment = ({ date }) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const setDate = (date.toLocaleDateString('en-US', options));

    return (
        <section style={{ marginTop: "4em" }}>
            <div style={{ marginBottom: "3em" }} className="text-center">
                <h3 className="primary-text text-center">Available Appointments on {setDate}</h3>
            </div>
            <div className='container mt-5 mb-5'>
                <div className="row g-2">
                    {
                        bookingData.map((booking) => <BookingCard key={booking.id} setDate={setDate} booking={booking}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;