import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";
import "./App.css";
import MyClassBoard from "./components/ClassBoard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import ClientRegistration from "./components/ClientRegistration"
import InstructorRegistration from "./components/InstructorRegistration";
import styled, { css } from 'styled-components'
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
      <h1>
      Anywhere Fitness
      </h1>
      <div>
      <button onClick={themeToggler}>Switch Theme</button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </>
    </ThemeProvider>
    );
  };

//   const Background = styled.section`
//   padding: 4em;
//   background: black;
// `;

//   render(
//     <Background>
//       <ClientRegistration/>
//       <InstructorRegistration/>
//     </Background>
//   );



//     <div>
//     <h1>Anywhere Fitness Registration</h1>
//       <p>Click below to get registered:</p>
//     </div>
//     <Router>
//     //   <div className="App">
//     //   <ul>
//     //     <li>
//     //       <Link to="/user">Clients</Link>
//     //     </li>
//     //     <li>
//     //       <Link to="/instructor">Instructors</Link>
//     //     </li>
//     //   </ul>
//      <div>
//         <Switch>
//           <PrivateRoute exact path="/ClassBoard" component={MyClassBoard} />
//           <Route path="/user" component={ClientRegistration} />
//           <Route path="/instructor" component={InstructorRegistration} />
//           <Route component={ClientRegistration} />
//         </Switch>
//      </div>
//     </Router>
//   );
// }

export default App;
