import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { ErrorOutline } from "@material-ui/icons";
import "./AppointmentForm.css";
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "4em",
        width: "45%",
        borderRadius: "20px"
    },
    overlay: {
        background: " rgba(148, 155, 145, 0.75)"
    }
};

Modal.setAppElement('#root');


const AppointmentForm = ({ modalIsOpen, closeModal, name, date }) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const setDate = (date.toLocaleDateString('en-US', options));
    const { register, handleSubmit, trigger, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.serviceName = name;
        data.date = date;
        data.created = new Date();
        if (data) {
            axios.post(`http://localhost:5000/addAppointment`, data)
                .then(res => {
                    if (res) {
                        closeModal();
                        
                    }
                })
        }
        
    };

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h3 className='primary-text text-center'>{name}</h3>
                <h6 className='text-muted text-center'>{setDate}</h6>
                <div className="form-container">

                    <form className='row' onSubmit={handleSubmit(onSubmit)}>

                        <div className="col-md-12">
                            <input {...register("name", { required: true })}
                                type="text"
                                onKeyUp={() => trigger("name")}
                                className={`formInput form-control ${errors.name && 'is-invalid'}`}
                                placeholder='Your Name'
                            />
                            {errors.name && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>Name Required</small></span>}
                        </div>

                        <div className="col-md-6">
                            <input {...register("number", { required: true })}
                                type="number"
                                onKeyUp={() => trigger("number")}
                                className={`formInput form-control ${errors.number && 'is-invalid'}`}
                                placeholder='Phone Number'
                            />
                            {errors.number && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>Phone Number Required</small></span>}
                        </div>
                        <div className="col-md-6">
                            <select className='formInput form-select'  {...register("gender", { required: true })}>
                                <option>Male</option>
                                <option>FeMale</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <input {...register("email", { required: true })}
                                type="email"
                                onKeyUp={() => trigger("email")}
                                className={`formInput form-control ${errors.email && 'is-invalid'}`}
                                placeholder='Your Email'
                            />
                            {errors.email && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>Email Required</small></span>}
                        </div>
                        
                        <div className="col-md-6">
                            <input {...register("age", { required: true })}
                                type="number"
                                onKeyUp={() => trigger("age")}
                                className={`formInput form-control ${errors.age && 'is-invalid'}`}
                                placeholder='age'
                            />
                            {errors.age && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>Age Required</small></span>}
                        </div>
                        <div className="col-md-6">
                            <input {...register("weight", { required: true })}
                                type="number"
                                onKeyUp={() => trigger("weight")}
                                className={`formInput form-control ${errors.weight && 'is-invalid'}`}
                                placeholder='weight'
                            />
                            {errors.weight && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>Weight Required</small></span>}
                        </div>
                        <div className="col-md-12">
                            <input {...register("address", { required: true })}
                                type="text"
                                onKeyUp={() => trigger("address")}
                                className={`formInput form-control ${errors.address && 'is-invalid'}`}
                                placeholder='Your address'
                            />
                            {errors.address && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>Address Required</small></span>}
                        </div>

                        <div>
                            <button type="submit" className="primary-btn mt-3">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </Modal>
        </div>
    );
};

export default AppointmentForm;