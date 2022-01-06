import React from 'react';
import Chair from "../../../images/chair.png"
const HeaderMain = () => {
    return (
        <main style={{ height: "635px" }} className='container d-flex align-items-center'>
            <div className="row  d-flex align-items-center">
                <div className="col-md-5">
                    <h1 style={{ color: "#3A4256" }}>Your New Smile <br /> Start Here</h1><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Expedita sit quidem architecto beatae voluptate est!</p><br />
                    <button className="primary-btn">
                        Get Appoinment
                    </button>
                </div>

                <div className="col-md-7">
                    <img src={Chair} alt="chair" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;