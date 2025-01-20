import './App.css';
import Alert from './componenents/Alert';
import Navbar from './componenents/Navbar';
import Textarea from './componenents/Textarea';
import About from './componenents/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState(null)

  const pageTheme = {
    themeRed(){
      if (mode === 'dark'){
        setColor(`#8B0000`)
        document.body.style.backgroundColor = `#8B0000`
      }
      else {
        setColor(`#FFC0CB`)
        document.body.style.backgroundColor = `#FFC0CB`
      }
    },
    themeYellow(){
      if (mode === 'dark'){
        setColor(`rgb(70, 70, 16)`)
        document.body.style.backgroundColor = `rgb(70, 70, 16)`
      }
      else {
        setColor(`#FCFC74`)
        document.body.style.backgroundColor = `#FCFC74`
      }
    },
    themeGreen(){
      if (mode === 'dark'){
        setColor(`rgb(36, 78, 24)`)
        document.body.style.backgroundColor = `rgb(36, 78, 24)`
      }
      else {
        setColor(`#98FB98`)
        document.body.style.backgroundColor = `#98FB98`
      }
    }
  }

  const showAlert = (type, info) => {
    setAlert({
      type,
      info
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }

  const toggleMode = () => {
    if (mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = color || "black";
        showAlert('success','Dark mode has been enabled')
        
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = color || "white";
      showAlert('success','Light mode has been enabled')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="My app" mode={mode} toggleMode={toggleMode} theme={pageTheme} />
        <Alert alert={alert} />
        <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/" element={<Textarea heading={'my text app'} mode={mode} showAlert={showAlert} color={color} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
