// const x = new Date('2022-01-13T13:47:29.674Z');
    // x.setHours(0,0,0,0);
    // console.log(x)
    // const x = new Date().setHours(0,0,0,0);
    // console.log(x.toLocaleDateString())
    // console.log((new Date(x)).toLocaleDateString())
    import axios from 'axios';
import React, { useEffect, useState } from 'react';
    
    const SnackBar = () => {

        const [appointments, setAppointments] = useState([]);
        useEffect(() => {
            axios.get(`http://localhost:5000/appointments`)
                .then(res => setAppointments(res.data.reverse()))
        }, [appointments])
        
        
        return (
            <div>
                <h1 className='text-center text-dark'>This is Snackbar</h1>
            </div>
        );
    };
    
    export default SnackBar;