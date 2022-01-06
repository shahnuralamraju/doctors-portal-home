import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import "./App.css";


function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
           
        </Switch>
    </Router>
  );
}

export default App;
