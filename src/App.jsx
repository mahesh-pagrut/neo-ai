import React, { useContext} from 'react';
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';

function App() {
  const {} = useContext(datacontext);


  return (
    <div className='main'>
      <img src={va} alt='neo main' id='sh'/>
      <span>I'm Neo, your personal AI assistant model</span>
      <button onClick={()=> { speak("Hello, I am Neo, your personal AI assistant, crafted with intelligence by Mahesh.")}}>Click here <CiMicrophoneOn/></button>
    </div>
  );
}

export default App;
