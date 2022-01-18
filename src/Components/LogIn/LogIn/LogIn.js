import React from 'react';
import { useState, useContext } from "react";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import { createUserInEmailAndPassword, handleGoogleSignIn, signInUserWithEmailAndPassword } from './LogInManager';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Typography, Grid, TextField, CssBaseline, Button, Avatar, IconButton } from '@material-ui/core';
import { UseStyles, emailPattern, passwordPattern, namePattern } from './UseStyles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';

const LogIn = () => {
    const classes = UseStyles();
    const { register, handleSubmit, trigger, formState: { errors } } = useForm();
    const [hidePass, setHidePass] = useState(true);
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        if (newUser) {
            createUserInEmailAndPassword(data.name, data.email, data.password)
                .then(res => handleUserInfo(res));
        }
        if (!newUser) {
            signInUserWithEmailAndPassword(data.email, data.password)
                .then(res => handleUserInfo(res));
        }
    };

    const handleUserInfo = result => {
        setLoggedInUser(result);
        if(result.success){
            history.replace(from);
        }
    }

    // google SignIn
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => handleUserInfo(res));
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
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
                    <Grid container spacing={2}>
                        {newUser &&
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    color={errors.name ? "secondary" : "primary"}
                                    fullWidth
                                    label="Your Name"
                                    name="name"
                                    onKeyUp={() => trigger("name")}
                                    autoFocus
                                    {...register("name", {
                                        required: "You should write your name here",
                                        minLength: {
                                            value: 3,
                                            message: "Name should have minimum 3 character"
                                        },
                                        pattern: {
                                            value: namePattern,
                                            message: "Name contains letters only"
                                        },
                                    })}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name?.message}
                                />
                            </Grid>}
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                placeholder="example@gmail.com"
                                fullWidth
                                label="Email Address"
                                name="email"
                                onKeyUp={() => trigger("email")}
                                {...register("email", {
                                    required: "You should write your email here",
                                    pattern: {
                                        value: emailPattern,
                                        message: "Enter a valid email address"
                                    },
                                })}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                fullWidth
                                placeholder="PassWord#12"
                                name="password"
                                onKeyUp={() => trigger("password")}
                                label="Password"
                                type={!hidePass ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton size="small" onClick={() => setHidePass(!hidePass)}>
                                            {hidePass ? <VisibilityOff /> : <Visibility color='primary' />}
                                        </IconButton>
                                    ),
                                }}
                                {...register("password", {
                                    required: "You should write your password here",
                                    pattern: {
                                        value: passwordPattern,
                                        message: "Password contain at least one special character,number, capital and small letter",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Password contain minimum 8 character"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Password contain maximum 10 character"
                                    },

                                })}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                            />
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