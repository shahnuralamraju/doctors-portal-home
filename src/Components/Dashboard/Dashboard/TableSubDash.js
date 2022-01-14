import React from 'react';

const TableSubDash = ({appointment, index}) => {
    const {name, gender, age, weight, number, date} = appointment;
    const setDate = new Date(date).toLocaleDateString('en-GB');
    
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td className='text-center'>{name}</td>
            <td className='text-center'>{gender}</td>
            <td className='text-center'>{setDate}</td>
            <td className='text-center'>{weight}</td>
            <td className='text-center'>{number}</td>
            <td className='text-center'>{age}</td>
            
        </tr>
    );
};

export default TableSubDash;