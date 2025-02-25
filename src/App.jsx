import React, { useContext} from 'react';
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';

function App() {
  const {recognition, speaking, setSpeaking} = useContext(datacontext);


  return (
    <div className='main'>
      <img src={va} alt='neo main' id='sh'/>
      <span>I'm Neo, your personal AI assistant model</span>
      {!speaking? <button onClick={()=> {
        setSpeaking(true)
        recognition.start()
        }}>Click here <CiMicrophoneOn/></button>
        
        : 
        <div>
        
        </div>
        }
    </div>
  );
}

export default App;
