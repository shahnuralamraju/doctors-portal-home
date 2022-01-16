import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DashCard from './DashCard';
import SubDash from './SubDash';

const Dashboard = () => {

    const [appointments, setAppointments] = useState([]);
    const [appointStatus, setAppointStatus] = useState(false);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/appointments`)
            .then(res => setAppointments(res.data.reverse()))
    }, [appointStatus]);

    const approavedAppoints = appointments.filter((appoint) => appoint.status === "Approaved");
    const cancelledAppoints = appointments.filter((appoint) => appoint.status === "Cancelled");
    const pendingAppoints = appointments.filter((appoint) => appoint.status !== "Approaved" && appoint.status !== "Cancelled");

    // const todayAppoints = appointments.filter((appoint) => new Date(appoint.date) === new Date(new Date().setHours(0, 0, 0, 0)));
    // console.log(todayAppoints)

    const DashInfosData = [
        { title: "Pending", background: "primary", appStatus: pendingAppoints.length },
        { title: "Cancel's", background: "danger", appStatus: cancelledAppoints.length },
        { title: "Approaved", background: "success", appStatus: approavedAppoints.length },
        { title: "Total's", background: "warning", appStatus: appointments.length },
    ];

    const handleStateOnClick = (name) => {
        setTitle(name);
    }

    return (
        <section style={{ backgroundColor: "#f4fffb" }} >
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 p-2 ms-3">
                    <div className="py-3">
                        <h4 className="secondary-text">
                            Dashboard
                        </h4>
                    </div>
                    <div className="row g-4">
                        {
                            DashInfosData.map((info, index) =>
                                <DashCard
                                    key={index}
                                    info={info}
                                    handleStateOnClick={handleStateOnClick}
                                />)
                        }
                    </div>

                    <div className="row ms-2 px-4 pb-5 bg-white shadow">
                        <SubDash
                            appointments={
                                title === "Pending" ? pendingAppoints
                                    :
                                    title === "Cancel's" ? cancelledAppoints
                                        :
                                        title === "Approaved" ? approavedAppoints : appointments
                            }
                            title={title}
                            appointStatus={appointStatus}
                            setAppointStatus={setAppointStatus}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;