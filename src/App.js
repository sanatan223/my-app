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

  const pageTheme = {
    themeRed(){
      if (mode === 'dark'){
        document.body.style.backgroundColor = `#8B0000`
      }
      else {
        document.body.style.backgroundColor = `#FFC0CB`
      }
    },
    themeYellow(){
      if (mode === 'dark'){
        document.body.style.backgroundColor = `#808000`
      }
      else {
        document.body.style.backgroundColor = `#FCFC74`
      }
    },
    themeGreen(){
      if (mode === 'dark'){
        document.body.style.backgroundColor = `#ADFF2F`
      }
      else {
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
        document.body.style.backgroundColor = "black";
        showAlert('success','Dark mode has been enabled')
        
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert('success','Light mode has been enabled')
    }
  }

  return (
    <>
      <Router future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        }} >
        <Navbar title="My app" mode={mode} toggleMode={toggleMode} theme={pageTheme} />
        <Alert alert={alert} />
        <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/home" element={<Textarea heading={'my text app'} mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
