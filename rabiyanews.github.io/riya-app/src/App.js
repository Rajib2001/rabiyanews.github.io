
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
// import  Switch from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({

      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);

    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been Enabled', 'success')

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode has been Disabled', 'success')
    }
  }
  return (
    <>
      <h1 mode={mode}>
        Hello Riya Welcome to my "Text Anaylzer App"..

      </h1>


      <Router>
        <Navbar heading="RiyaText" aboutText="AboutText" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>

            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
