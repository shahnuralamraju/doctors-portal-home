import React from 'react';

const DashCard = ({ info, handleStateOnClick }) => {
    const { title, background, appStatus } = info;
    return (
        <div onClick={() => handleStateOnClick(title)} style={{ cursor: "pointer" }}
            className='col-md-3 mb-5'>
            <div className={`d-flex align-items-center rounded p-3 justify-content-center text-white bg-${background}`}>
                <div>
                    <h3 style={{ fontSize: "3em" }}>{appStatus >= 10 ? appStatus : "0" + appStatus}</h3>
                </div>
                <div className='ms-4'>
                    {title}
                    <p>Appointments</p>
                </div>
            </div>
        </div>
    );
};

export default DashCard;