// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { createContext, useState } from 'react';
import Login from './components/login';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter, Route } from 'react-router-dom'


const useStyles = makeStyles({
  appWindow: {
    height: "100%",
    width: "calc(100% - 100px)"
  },
  mainContainer: {
    display: "flex",
    overflowY: "auto",
    height: "calc(100% - 80px)",
    width: "100%"
  },
  innerContainer: {
    display: "flex",
    margin: "0 auto",
    maxWidth: "1180px",
    width: "100%",
    height: "100%"
  }
});


function App() {
  
  const classes = useStyles();
 

  return (
      <BrowserRouter>
        <div className={classes.appWindow}>
          
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
                <Route exact path="/" component={Login} />
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;

