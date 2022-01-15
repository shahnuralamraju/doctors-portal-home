import { Button } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import axios from 'axios';
import React from 'react';

const TableSubDash = ({ appointment, index }) => {
    const { name, gender, weight, number, date, _id, status } = appointment;
    const setDate = new Date(date).toLocaleDateString('en-GB');
    const handleOnClick = (patienId, value) => {
        fetch(`http://localhost:5000/appointment/${patienId}`)
            .then(res => res.json())
            .then(data => {
                data.status = value;
                if (data) {
                    axios.patch(`http://localhost:5000/appointment/update/${patienId}`, data);
                }
            })
    };

    return (
        <tr>
            <th className="col-md-1 text-center">{index + 1}</th>
            <td className='col-md-2 text-center'>{name}</td>
            <td className='col-md-1 text-center'>{gender}</td>
            <td className='col-md-2 text-center'>{setDate}</td>
            <td className='col-md-1 text-center'>{weight}</td>
            <td className='col-md-2 text-center'>{number}</td>
            <td className='col-md-3 text-center align-middle'>
                <span className="tertioary-btn">{status ? status : "Pending"}</span>
                <div className="btn-group">
                    <Button className='ms-2 dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" variant='contained' color="secondary"><Edit /></Button>
                    <ul className="dropdown-menu tertioary-btn">
                        <li><button onClick={() => handleOnClick(_id, "Approaved")} className="dropdown-item tertioary-btn">Approaved</button></li>
                        <li><button onClick={() => handleOnClick(_id, "Cancelled")} className="dropdown-item tertioary-btn">Cancelled</button></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default TableSubDash;