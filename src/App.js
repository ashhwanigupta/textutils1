import React, { useState } from 'react'
import './App.css';
import TextAnalyzer from './components/TextAnalyzer';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  const [mode , setMode] = useState('light')
  const [alert ,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#212529'
      showAlert("Dark mode has been enable","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= '#fff'
      showAlert("Light mode has been enable", "success")
    }
  }

  return (
    <>
    <Router>      
      <Navbar mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>     
      <div className="container my-3">


      <Routes>
          <Route exact path='/' element={<TextAnalyzer showAlert={showAlert} mode={mode} heading="Enter the text below:"/>}/> 
          <Route exact path='/about' element={<About mode={mode}/>} />

      </Routes>
      </div>
      </Router>
     
      
      
    </>
  );
}

export default App;
