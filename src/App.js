import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  };
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#09377a';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - BluishMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - LightMode';
    }
  }

  const toggleeMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("Greenish mode has been enabled","success");
      document.title = 'TextUtils - GreenishhMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - LightMode';
    }
  }

  const toggleeeMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'red';
      showAlert("Greenish mode has been enabled","success");
      document.title = 'TextUtils - RedishMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
    <>
       {/* <BrowserRouter> */}
        <Navbar title="TextUtils" abouttext="aboutText" mode={mode}  toggleMode={toggleMode} toggleeMode={toggleeMode} toggleeeMode={toggleeeMode} />
       <Alert alert={alert}/>
       <div className="container my-3"> 
       {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}> */}
          {/* </Route> */}
        {/* </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
       </div>
       {/* </BrowserRouter> */}
    </>
   );
}
  
export default App; 
