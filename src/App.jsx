import React, { useContext} from 'react';
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speakImage from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"

function App() {
  let {recognition, speaking, setSpeaking, prompt ,setPrompt ,response} = useContext(datacontext);


  return (
    <div className='main'>
      <img src={va} alt='neo main' id='sh'/>
      <span>I'm Neo, your personal AI assistant model</span>

      {!speaking? <button onClick={()=>{
        setPrompt('listening')
        setSpeaking(true)
        recognition.start()
        }}>Click here <CiMicrophoneOn/></button>
        :
        <div className='response'>
          {!response?  <img src={speakImage} alt="speak spinner" id='speak'/>
          :
           <img src={aigif} alt="AI gif" id='aigif'/>
          }
          <p>{prompt}</p>
        </div>
        }
    </div>
  );
}

export default App;
