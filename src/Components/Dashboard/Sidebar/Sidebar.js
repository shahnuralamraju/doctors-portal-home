import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { SettingsOutlined, DashboardOutlined, SupervisorAccountOutlined, CalendarTodayOutlined, ReceiptOutlined } from '@material-ui/icons';
import "./Sidebar.css";
import { Link, NavLink } from 'react-router-dom';
import DocLogo from "../../../images/doc3.png"
import { UserContext } from '../../../App';
const useStyles = makeStyles(() => ({
    root: {
        color: "white",
        width: '100%',
    },
    btn: {
        paddingLeft: "2em"
    },
    color: {
        color: "white"
    },
    link: {
        color: "red",
        textDecoration: "none"
    },
    be: {
        color: "white",
        marginLeft: "-1.3em",
    }
}));



const Sidebar = () => {
    const classes = useStyles();
    const [loggedInUser] = useContext(UserContext);
    const navData = [
        { name: "Dashboard", desti: "/dashboard/dashboard", icon: DashboardOutlined },
        { name: "Appointment", desti: "/dashboard/appointment", icon: CalendarTodayOutlined },
        { name: "Patients", desti: "/dashboard/patient", icon: SupervisorAccountOutlined },
        { name: "Prescription", desti: "/", icon: ReceiptOutlined },
        { name: "Settings", desti: "/", icon: SettingsOutlined },
    ]

    return (
        <div className="sidebar">
            <Link to="/">
                <div className='d-flex align-items-center justify-content-center pt-3'>
                    <div style={{ width: "100px", height: "100px", borderRadius: "50%", }}>
                        <img style={{ width: "100%", borderRadius: "50%", border: "8px solid white" }}
                            src={`${loggedInUser.success ? loggedInUser.photo : DocLogo}`} alt="DocLogo" />
                    </div>
                </div>
            </Link>
            <h4 className='text-center text-white pt-2'> Doctors Portal</h4>
            <div className={` ${classes.root}`}>
                <List component="nav" aria-label="main mailbox folders">

                    {
                        navData.map((nav, index) =>
                            <NavLink key={index} activeClassName="on-active" className={classes.link} to={nav.desti}>
                                <ListItem className={classes.btn} button>
                                    <ListItemIcon >
                                        {<nav.icon className={classes.color} />}
                                    </ListItemIcon>
                                    <ListItemText className={classes.be} primary={nav.name} />
                                </ListItem>
                            </NavLink>)
                    }

                </List>
            </div>
        </div>

    );
}
export default Sidebar;