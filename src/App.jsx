import React, { useContext } from "react";
import "./App.css";
import va from "./assets/ai.gif";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from "./context/UserContext";
import speakImage from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";
import Footer from "./components/Footer";

function App() {
  let {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse,
  } = useContext(datacontext);

  return (
    <div className="main">
      <img src={va} alt="neo main" id="sh" />
      <span>I'm Neo, your personal AI assistant</span>

      {!speaking ? (
        <button
          onClick={() => {
            if (!recognition) {
              alert("Voice recognition is not supported on this device.");
              return;
            }
            setPrompt("Listening...");
            setSpeaking(true);
            setResponse(false);
            recognition.start();
          }}
        >
          Click Here <CiMicrophoneOn />
        </button>
      ) : (
        <div className="response">
        <div className="gif-container">
          {!response ? (
            <img src={speakImage} alt="speak spinner" id="speak" />
          ) : (
            <img src={aigif} alt="AI gif" id="aigif" />
          )}
        </div>
        <p>{prompt}</p>
      </div>
      )}
      <Footer/>
    </div>
  );
}

export default App;
