import './App.css';
import Alert from './componenents/Alert';
import Navbar from './componenents/Navbar';
import Textarea from './componenents/Textarea';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [theme, setTheme] = useState(null)

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
      <Navbar title="My app" mode={mode} toggleMode={toggleMode} theme={pageTheme} />
      <Alert alert={alert} />
      <Textarea heading={'my text app'} mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
