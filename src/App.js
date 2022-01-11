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
           
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
