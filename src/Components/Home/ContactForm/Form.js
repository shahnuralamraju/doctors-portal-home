import React from 'react';
import "./Form.css";
const Form = () => {
    return (
        <div>
            <form>
                <input type="email" className="form-control form-input" placeholder="Email*" />
                <input type="text" className="form-control form-input" placeholder="SubJect*" />
                <textarea className="form-control form-input" rows="8" placeholder="Your Message*" />
                <button style={{width:"40%", margin:"0 27%"}} className="primary-btn">Submit</button>
            </form>
        </div>
    );
};

export default Form;