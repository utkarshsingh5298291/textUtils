
import './App.css';
// import  About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
  
// } from "react-router-dom";

function App() {

  const[mode, setMode]=useState('light');//whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);


          const showAlert=(message,type)=>{

            setAlert({
              msg: message,
              type:type
            })
            setTimeout(() => {
              setAlert(null);
            }, 1500);

          }

          const toggleMode=()=>{
                    if(mode==='light')
                    {
                      setMode('dark');
                      document.body.style.backgroundColor='#071330';
                      showAlert('Dark mode has been enabled',"success");
                      document.title="TextUtils-Dark Mode"
                    }
                    else{
                      setMode('light');
                      document.body.style.backgroundColor='white';
                      showAlert('Light mode has been enabled',"success");
                      document.title="TextUtils-Light Mode"
                    }
                  }

                  
  return (
   <>
   {/*Comenting out everything related to router as I needed to host the react app o  github it does not support router*/}
   {/*<Router> */}
  
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} aboutText="About Text Utils"></Navbar>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Routes>*/}

          {/*  <Route path="/about" element={<About/>}>*/}
              
           {/* </Route>

              <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the details" mode={mode}></TextForm>}>
             
          </Route>

        </Routes>*/}
         <TextForm showAlert={showAlert} heading="Enter the details" mode={mode}></TextForm>
          
        </div>
   {/*</Router>*/}

   </>
     
  );
}

export default App;
