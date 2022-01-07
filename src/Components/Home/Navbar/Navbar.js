import React from 'react';
import { Link } from 'react-router-dom';
import DocLogo from "../../../images/docLogo.png"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container pt-2">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{width:"120px"}}>
                    <img style={{width:"100%"}} src={DocLogo} alt="Doctors Portal" />
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-dark" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-dark" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-dark" to="/">Dental Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-white" to="/">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-white" to="/">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-white" to="/">Contact Us</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;