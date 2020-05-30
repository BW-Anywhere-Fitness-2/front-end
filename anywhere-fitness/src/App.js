import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ClientRegistration from "./components/ClientRegistration"
import InstructorRegistration from "./components/InstructorRegistration";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <>
      
      <Router>
      
      <h1 onClick={themeToggler}>
      Anywhere Fitness
      </h1>
      <div>
      <button onClick={themeToggler}>Dark/Light Mode</button>
        <ul>
          <li>
            <Link style={{color: "#00eeee"}} to="/">Home</Link>
          </li>
           <li>
            <Link style={{color: "#00eeee"}} to="/login">Login</Link>
          </li>
          </ul>
          <p>Register</p>
          <ul>
          <li>
            <Link style={{color: "#00eeee"}} to="/users">Clients</Link>
          </li>
          <li>
            <Link style={{color: "#00eeee"}} to="/instructors">Instructors</Link>
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
      </>
    </ThemeProvider>
    );
  };

export default App;
