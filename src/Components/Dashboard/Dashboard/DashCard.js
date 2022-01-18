import React from 'react';

const DashCard = ({ info, handleStateOnClick }) => {
    const { title, background, appStatusLength } = info;
    return (
        <div onClick={() => handleStateOnClick(title)} style={{ cursor: "pointer" }}
            className='col mb-5'>
            <div className={`d-flex align-items-center rounded p-3 justify-content-center text-white bg-${background}`}>
                <div>
                    <h3 style={{ fontSize: "2.5em" }}>
                        {appStatusLength >= 10 ? appStatusLength : "0" + appStatusLength}
                    </h3>
                </div>
                <div className='ms-3'>
                    {title}
                    <p>Appointments</p>
                </div>
            </div>
        </div>
    );
};

export default DashCard;