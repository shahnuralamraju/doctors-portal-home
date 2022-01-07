import React from 'react';

const ServiceCard = ({ service }) => {

    const { name, img } = service;

    return (
        <div className='col-md-4'>
            <div className='border rounded text-center p-4'>
                <div style={{ height: "23%",width:"23%", margin: "auto" }}>
                    <img style={{ width: "100%" }} src={img} alt="ima" />
                </div><br />
                <h4 className='secondary-text'>{name}</h4><br />
                <small className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores deserunt voluptate laboriosam sunt dolorem iure cupiditate itaque ut sed!
                </small>
            </div>
        </div>
    );
};

export default ServiceCard;