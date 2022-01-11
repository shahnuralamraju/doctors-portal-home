import React from 'react';
import LogIn from './LogIn';
import loginPic from '../../../images/login.png';
import "./LoginHome.css";

const LoginHome = () => {
    return (
        <section style={{ height: "100vh" }} className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="login-container"><LogIn /></div>
                </div>
                <div className="col-md-6">
                    <div style={{ height:"100vh"}}>
                        <img style={{ width: "95%", height: "90%",marginTop:"5.3em" }} src={loginPic} alt="login" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginHome;