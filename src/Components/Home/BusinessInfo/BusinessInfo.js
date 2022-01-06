import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: "Opening Ours",
        description: "We are open 7 days",
        icon: faClock,
        background: "primary"
    },
    {
        title: "Visit Our Location",
        description: "Booklyn, NY 10036, United States",
        icon: faMapMarkerAlt,
        background: "dark"
    },
    {
        title: "Contact Us Now",
        description: "+000 123 456 789",
        icon: faPhone,
        background: "primary"
    },
    
]

const BusinessInfo = () => {
    return (
        <section className='container'>
            <div className="row g-4">
                {
                    infosData.map((info) => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;