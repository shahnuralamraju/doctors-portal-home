import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { name, town, pic } = testimonial;

    return (
        <div className='col-md-4'>
            <div className='shadow rounded text-center p-3 '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium animi vitae nam! Nihil recusandae libero perferendis architecto eius, similique necessitatibus aspernatur, accusamus esse, voluptatum officiis incidunt nisi expedita. Et tempore deleniti excepturi, cumque nulla enim eveniet voluptas corporis odio!</p>
                <div className='d-flex align-items-center rounded pt-5 justify-content-evenly'>
                    <div style={{ height: "80px", width: "80px" }}>
                        <img style={{ width: "100%", height: "100%",borderRadius:"50%" }} src={pic} alt="ima" />
                    </div>
                    <div>
                        <h4 style={{ color: "#3A4256" }}>{name}</h4>
                        <small className='text-muted'>{town}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;