import React from 'react';
import { useState, useContext } from "react";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import { createUserInEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInUserWithEmailAndPassword } from './LogInManager';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Typography, Grid, TextField, CssBaseline, Button, Avatar } from '@material-ui/core';
import { UseStyles } from './UseStyles';


const LogIn = () => {
    const classes = UseStyles();
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        success: false,
        isSignedIn: false,
        error: "",
        name: "",
        email: "",
        password: ""
    });

    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleUserInfo = result => {
        setUser(result);
        setLoggedInUser(result);
        history.replace(from);
    }

    // google SignIn
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => handleUserInfo(res));
    };

    const handleOnChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
        }
        if (e.target.name === "password") {
            isFieldValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    };

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserInEmailAndPassword(user.name, user.email, user.password)
                .then(res => handleUserInfo(res));
        }
        if (!newUser && user.email && user.password) {
            console.log("submitted")
            signInUserWithEmailAndPassword(user.email, user.password)
                .then(res => handleUserInfo(res));
        }
        e.preventDefault();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h3" variant="h5">
                    {newUser ? "Sign Up" : "Sign In"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} autoComplete='off'>
                    <Grid container spacing={2}>
                        {newUser &&
                            <Grid item xs={12}>
                                <TextField onChange={handleOnChange} name="name" required fullWidth label="Your Name" autoFocus />
                            </Grid>}
                        <Grid item xs={12}>
                            <TextField onChange={handleOnChange} label="Email Address" name="email" required fullWidth autoFocus />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={handleOnChange} required fullWidth name="password" label="Password" type="password" />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="flex-end" spacing={1}>
                        <Grid item xs={12}>
                            <p className='secondary-text' onClick={() => setNewUser(!newUser)} style={{ cursor: 'pointer', marginTop: "1em" }} >
                                {newUser ? "Already Have An Account? Sign In" : "Create New Account? Sign Up"}
                            </p>
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="secondary" className={`primary-btn ${classes.submit}`} >
                        {newUser ? 'Sign Up' : 'Sign In'}
                    </Button>

                </form>
                <Grid container>
                    <Grid item xs={12}>
                        <Button className={`primary-btn ${classes.submit}`} onClick={googleSignIn} fullWidth color="secondary" variant="contained" >
                            Continue with Google
                        </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        {!loggedInUser.success && <p style={{ color: "red" }}>{loggedInUser.error}</p>}
                    </Grid>
                </Grid>
            </div>
        </Container >
    );
};
export default LogIn;