import React from 'react';
import comma from "../../../images/comma.png";
import patient1 from "../../../images/p1.jpg";
import patient2 from "../../../images/p2.jpg";
import patient3 from "../../../images/p3.jpg";
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testiMonialsData = [
    {
        name:"Winson Herry",
        town:"California",
        pic:patient1
    },
    {
        name:"Herry Porter",
        town:"New Yourk",
        pic:patient2
    },
    {
        name:"Nicholas Poran",
        town:"West Indies",
        pic:patient3
    },
];


const Testimonials = () => {
    return (
        <section style={{marginBottom:"10em"}}>
            <div className="container">
                <div className="row d-flex justify-content-between mb-5">
                    <div className="col-md-4">
                        <h5 style={{ color: "#1CC7C1" }}>TESTIMONIAL</h5>
                        <h1 style={{ color: "#3A4256" }}>What's Our Patients Says</h1>
                    </div>
                    <div style={{width:"200px", height:"150px"}} className="col-md-4">
                        <img style={{width:"100%", height:"100%"}}  src={comma} alt="comma" />
                    </div>
                </div>

                <div className="row g-4">
                    {
                        testiMonialsData.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial}></TestimonialCard>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Testimonials;