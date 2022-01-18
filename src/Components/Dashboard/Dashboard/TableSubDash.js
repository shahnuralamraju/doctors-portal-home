import { Button } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import axios from 'axios';
import React from 'react';

const TableSubDash = ({ appointment, index, appointStatus, setAppointStatus, title }) => {
    const { name, gender, weight, number, date, _id, status } = appointment;
    const setDate = new Date(date).toLocaleDateString('en-GB');

    const handleOnClick = (patientId, value) => {
        axios.get(`http://localhost:5000/appointment/${patientId}`)
            .then(res => {
                res.data.status = value;
                if (res.data) {
                    axios.patch(`http://localhost:5000/appointment/update/${patientId}`, res.data)
                        .then(res => {
                            if (res.data) {
                                setAppointStatus(!appointStatus);
                            }
                        })
                }
            })
    };

    const handleRemove = (patientId) => {
        axios.delete(`http://localhost:5000/delete/${patientId}`)
            .then(res => {
                if (res.data) {
                    setAppointStatus(!appointStatus);
                }
            })
    };
    
    return (
        <tr>
            <th className="col-md-1 text-center align-middle">
                {(index + 1) >= 10 ? (index + 1) : "0" + (index + 1)}
            </th>
            <td className='col-md-2 text-center align-middle'>{name}</td>
            <td className='col-md-1 text-center align-middle'>{gender}</td>
            <td className='col-md-2 text-center align-middle'>{setDate}</td>
            <td className='col-md-1 text-center align-middle'>{weight}</td>
            <td className='col-md-2 text-center align-middle'>
                
                {
                    title === "Cancel's" ? 
                    <Button onClick={() => handleRemove(_id)}
                        color="secondary" variant='outlined'>Remove</Button>: number
                }

            </td>
            <td className='col-md-3 text-center'>
                <div className='row  d-flex align-items-center justify-content-center w-100'>
                    <div className={`col-md-6 status-div ${status ? status : "Pending"}`}>{status ? status : "Pending"}</div>
                    <div className="btn-group col-md-2">
                        <Button className='text-success' data-bs-toggle="dropdown" aria-expanded="false" variant='outlined'><Edit /></Button>
                        <ul className="dropdown-menu tertioary-btn">
                            <li><button onClick={() => handleOnClick(_id, "Approaved")} className="dropdown-item tertioary-btn">Approaved</button></li>
                            <li><button onClick={() => handleOnClick(_id, "Cancelled")} className="dropdown-item tertioary-btn">Cancelled</button></li>
                            <li><button onClick={() => handleOnClick(_id, "Pending")} className="dropdown-item tertioary-btn">Pending</button></li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TableSubDash;