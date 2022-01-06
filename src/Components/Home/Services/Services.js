import React from 'react';
import "./Services.css";
import Fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Whitening from "../../../images/whitening.png";
import ServiceCard from '../ServiceCard/ServiceCard';


const serviceData = [
    {
        name: "Fluoride TreatMent",
        img: Fluoride,
    },
    {
        name: "Cavity Filling",
        img: Cavity,
    },
    {
        name: "Teath Whitening",
        img: Whitening,
    },
]




const Services = () => {
    return (
        <section className='services-container'>
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
                <h2 style={{ color: "#3A4256" }}>Services We Provide</h2>
            </div>
            <div className='container mt-5 mb-5'>
                <div className="row g-4">
                    {
                        serviceData.map((service) => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;