import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/privateRoute";
import Login from "./components/Login";
import ClientRegistration from "./components/ClientRegistration"
import InstructorRegistration from "./components/InstructorRegistration";
import CreateClass from "./components/CreateClass"

function App() {
  return (
      <>
      {/* <CreateClass/> */}
      <h1>Anywhere Fitness</h1>
      <Router>
      <div>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
           <li>
            <Link to="/login">Login</Link>
          </li>
          </ul>
          <p>Register</p>
          <ul>
          <li>
            <Link to="/users">Clients</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/users">
            <ClientRegistration />
          </Route>
          <Route exact path="/instructors">
            <InstructorRegistration />
          </Route>
        </Switch>
      </div>
    </Router>
      </>
    );
  };

export default App;
