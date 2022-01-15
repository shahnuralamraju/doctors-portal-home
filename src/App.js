import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import "./App.css";
import Appointment from "./Components/Appointment/Appointment/Appointment";
// import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";
import LoginHome from "./Components/LogIn/LogIn/LoginHome";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Patient from "./Components/Dashboard/Patient/Patient";
import DashAppoint from "./Components/Dashboard/DashAppoint/DashAppoint";
import PresCription from "./Components/Dashboard/Dashboard/PresCription/PresCription";
import { Snackbar } from "@material-ui/core";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
          <Route exact path="/login">
            <LoginHome />
          </Route>
          <Route exact path="/snackbar">
            <Snackbar />
          </Route>
          <Route exact path="/dashboard/appointment">
            <DashAppoint />
          </Route>
          <Route path="/dashboard/patient">
            <Patient />
          </Route>
          <Route exact path="/dashboard/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/prescription">
            <PresCription />
          </Route>
           
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
