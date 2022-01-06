import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctorImg from "../../../images/doctor-small.png"
const DoctorCard = ({doctor}) => {
    const {name, phone } = doctor;
    return (
        <div className='col-md-4'>
            <div className='rounded text-center p-4'>
                <div style={{ height: "63%", width: "63%", margin: "auto" }}>
                    <img style={{ width: "100%" }} src={doctorImg} alt="ima" />
                </div>
                <h4 className='mt-2' style={{ color: "#3A4256" }}>{name}</h4> 
                <small className='text-muted'> 
                 <FontAwesomeIcon style={{color:"#1CC7C1"}} icon={faPhoneAlt} /> {phone}
                </small>
            </div>
        </div>
    );
};

export default DoctorCard;