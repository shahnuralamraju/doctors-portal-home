import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { ErrorOutline } from "@material-ui/icons";
import "./AppointmentForm.css";

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
        background:" rgba(148, 145, 145, 0.75)"
    }
};

Modal.setAppElement('#root');


const AppointmentForm = ({ modalIsOpen, closeModal, name, date }) => {

    const { register, handleSubmit, trigger, formState: { errors } } = useForm();
    const onSubmit = data =>{
         console.log(data);
         closeModal();
        };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h3 className='primary-text text-center'>{name}</h3>
                <h6 className='text-muted text-center'>{date}</h6>
                <div className="form-container">

                    <form className='row' onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="col-md-12">
                            <select className='formInput form-select'  {...register("gender", { required: true })}>
                                <option>Male</option>
                                <option>Fale</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <input {...register("name", { required: true })}
                                type="text"
                                onKeyUp={() => trigger("name")}
                                className={`formInput form-control ${errors.name && 'is-invalid'}`}
                                placeholder='Your Name'
                            />
                            {errors.name && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>You should have write your name</small></span>}
                        </div>
                        <div className="col-md-12">
                            <input {...register("number", { required: true })}
                                type="number"
                                onKeyUp={() => trigger("number")}
                                className={`formInput form-control ${errors.name && 'is-invalid'}`}
                                placeholder='number'
                            />
                            {errors.number && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>You should have write  your phone number</small></span>}
                        </div>
                        <div className="col-md-12">
                            <input {...register("email", { required: true })}
                                type="email"
                                onKeyUp={() => trigger("email")}
                                className={`formInput form-control ${errors.name && 'is-invalid'}`}
                                placeholder='Your Email'
                            />
                            {errors.email && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>You should have write your email</small></span>}
                        </div>
                        <div className="col-md-12">
                            <input {...register("date", { required: true })}
                                type="date"
                                onKeyUp={() => trigger("date")}
                                className={`formInput form-control ${errors.name && 'is-invalid'}`}
                                placeholder='date'
                            />
                            {errors.date && <span className="text-danger d-flex align-items-center mt-1">
                                <ErrorOutline className="error-icon" /><small>You should have write your email</small></span>}
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