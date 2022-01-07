import React from 'react';
import doctorL from "../../../images/doctor.png";
import "./MakeAppoinment.css";



const MakeAppointment = () => {
    return (
        <section className='appointment-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctorL} alt="treatment" />
                    </div>
                    <div style={{ zIndex: "5" }} className="col-md-7 py-5 text-white">
                        <h5 className='primary-text'>APPOINTMENT</h5>
                        <h1 className='my-4'>Exceptional Dental Care, <br />on Your Terms</h1>
                        <p className="lh-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores repudiandae est nemo quod mollitia, praesentium quisquam voluptatem magnam. Velit?
                        </p><br />
                        <button className="primary-btn">Learn More</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;