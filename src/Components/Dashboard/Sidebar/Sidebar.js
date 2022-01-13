import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { SettingsOutlined, DashboardOutlined, SupervisorAccountOutlined, CalendarTodayOutlined, ReceiptOutlined } from '@material-ui/icons';
import "./Sidebar.css";
import { Link, NavLink } from 'react-router-dom';
import DocLogo from "../../../images/doc3.png"
const useStyles = makeStyles(() => ({
    root: {
        color: "white",
        width: '100%',
        maxWidth: 360,
    },
    btn: {
        paddingLeft: "2em"
    },
    color: {
        color: "white"
    },
    link: {
        color: "red",
        textDecoration:"none"
    },
    be: { 
        color: "white",

    }
}));

const navData = [
    { name: "Dashboard", desti: "/dashboard/appointment", icon: DashboardOutlined },
    { name: "Appointment", desti: "/", icon: CalendarTodayOutlined },
    { name: "Prescription", desti: "/", icon: ReceiptOutlined },
    { name: "Patients", desti: "/", icon: SupervisorAccountOutlined },
    { name: "Settings", desti: "/", icon: SettingsOutlined },
]

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className="sidebar">
           <Link to="/"> <div style={{width:"200px",height:"200px", borderRadius:"50%", paddingLeft:"2em", paddingTop:"2em"}}>
                <img style={{width:"100%"}} src={DocLogo} alt="DocLogo" />
            </div></Link>
            <h4 className='text-center text-white'> Doctors Portal</h4>
            <div className={`pt-3 ${classes.root}`}>
                <List component="nav" aria-label="main mailbox folders">

                    {
                        navData.map((nav, index) => <NavLink key={index} activeStyle={{color:"red"}}  className={classes.link} to={nav.desti}>
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