import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import DocLogo from "../../../images/docLogo.png";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container pt-2">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{ width: "120px" }}>
                    <img style={{ width: "100%" }} src={DocLogo} alt="Doctors Portal" />
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-dark" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-dark" to="/appointment">Appointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-dark" to="/">Dental Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-white" to="/dashboard/appointment">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-white" to="/">Blogs</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link  text-white ms-5  dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {loggedInUser.success ? loggedInUser.name : "Sign Up"}
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    loggedInUser.success ?
                                        <li onClick={() => setLoggedInUser({})}><Link to="/login" className="dropdown-item">Sign Out</Link></li>
                                        : <><li className="nav-item">
                                            <Link className="dropdown-item" to="/login">Login</Link>
                                        </li>
                                         <li className="nav-item">
                                            <Link className="dropdown-item" to="/login">Sign Up</Link>
                                        </li></>
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;