import React, { useContext, useState } from "react";
import "./App.css";
import va from "./assets/ai.gif";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";
import { FiSettings } from "react-icons/fi"; // Import settings icon
import { datacontext } from "./context/UserContext";
import speakImage from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";
import Footer from "./components/Footer";

function App() {
  const [showSettings, setShowSettings] = useState(false);
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
      {/* Settings & Refresh Section */}


      <div className="top-right">
        <button className="refresh-button" onClick={() => window.location.reload()}>
          <IoMdRefresh />
        </button>
        <button className="settings-button" onClick={() => setShowSettings(!showSettings)}>
          <FiSettings />
        </button>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="settings-modal">
          <h3>How to Use Neo AI</h3>
          <ul>
            <li>Click the "Click Here" button to start voice recognition.</li>
            <li>Neo will listen and respond based on your query.</li>
            <li>If the AI doesn't respond, please refresh the page.</li>
          </ul>
        </div>
      )}

      <img src={va} alt="neo main" id="sh" />
      <span>I'm Neo, your personal AI assistant</span>

      {!speaking ? (
        <div className="button-container">
          <button
            className="click-button"
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
        </div>
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
      <Footer />
    </div>
  );
}

export default App;
