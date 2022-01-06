import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';



const InfoCard = ({ info }) => {
    const { title, description, icon, background } = info;

    return (
        <div className='col-md-4'>
            <div className={`d-flex align-items-center rounded p-5 justify-content-center text-white info-${background}`}>
                <div>
                    <FontAwesomeIcon style={{ fontSize: "3em" }} icon={icon} />
                </div>
                <div className='ms-4'>
                    <h6>{title}</h6>
                    <small className='small-text'>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;