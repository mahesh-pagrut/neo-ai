import React from 'react'
import "./App.css"
import va from "./assets/ai.png"
import {CiMicrophoneOn} from "react-icons/ci"


export default function App() {
  return (
    <div className='main'>
      <img src={va} alt='neo main' id='sh'/>
      <span>I'm Neo, your personal AI assistent model</span>
      <button>Click here <CiMicrophoneOn/></button>
    </div>
  )
}
