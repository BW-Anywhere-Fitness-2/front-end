import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MyClassBoard from "./components/ClassBoard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import ClientRegistration from "./components/ClientRegistration"
import InstructorRegistration from "./components/InstructorRegistration";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/ClassBoard" component={MyClassBoard} />
          <Route path="/user" component={ClientRegistration} />
          <Route path="/instructor" component={InstructorRegistration} />
          <Route component={ClientRegistration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
