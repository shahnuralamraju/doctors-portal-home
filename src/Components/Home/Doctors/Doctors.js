import React from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';


const doctorsData=[
    {
        name:"Dr. Caudi",
        phone:"+61 452 200 126"
    },
    {
        name:"Dr. Jhon Mitchel",
        phone:"+21 352 250 706"
    },
    {
        name:"Dr. Rashed Kabir",
        phone:"+91 055 340 806"
    },
]





const Doctors = () => {
    return (
        <section style={{marginBottom:"8em"}}>
            <div className="text-center">
                <h5 className='primary-text'>DOCTORS</h5>
            </div>
            <div className='container mt-5 mb-5'>
                <div className="row g-4">
                    {
                        doctorsData.map((doctor, index) => <DoctorCard key={index} doctor={doctor}></DoctorCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;