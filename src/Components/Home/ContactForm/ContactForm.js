
import React from 'react';
import "./ContactForm.css";
import Form from './Form';
const ContactForm = () => {
    return (
        <section className='contact-form'>
            <div style={{marginBottom:"6em"}} className="text-center text-white pt-5">
                <h5 style={{ color: "#1CC7C1" }}>CONTACT US</h5>
                <h2>Always Connect With Us</h2>
            </div>
            <div className='w-50 mx-auto mt-3 mb-5'>
                <Form/>
            </div>
        </section>
    );
};

export default ContactForm;