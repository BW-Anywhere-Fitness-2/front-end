import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Working on getting this new web-app made.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// import React from "react";
// import Pizza from "./components/Pizza"
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Home from "./components/Home"
// import "./App.css"

// const App = () => {
//   return (
//     <>
//     <h1>Lambda Eats</h1>
//       <p>Let's eat!</p>
//     <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/pizza">Order Pizza</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path="/pizza">
//           <Pizza />
//         </Route>
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
//     </>
//   );
// };
// export default App;

