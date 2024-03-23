import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode , setMode] = useState('light')
  const [alert , setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null);      
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark Mode is enabled","success")
      setInterval(() => {
        document.title="welcome to Text Converter"
      }, 2000);
      setInterval(() => {
        document.title="Danger Warning!"
      }, 1500);
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light Mode is enabled","success")

    }
  }
  return (
   <>
    <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to anylize below" mode={mode}/>
    </div>
   </>
  );
}

export default App;
