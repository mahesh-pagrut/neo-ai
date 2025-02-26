import React, { createContext, useState } from "react";
import run from "../gemini";

export const datacontext = createContext();

function UserContext({ children }) {
  let [speaking, setSpeaking] = useState(false);
  let [prompt, setPrompt] = useState("listening....");

  let [response, setResponse] = useState(false);

  function speak(text) {
    let synth = window.speechSynthesis;
    if (!synth) {
      console.error("Speech Synthesis not supported.");
      return;
    }
  
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "hi-GB";
  
    // Ensure speech starts after a user click
    setTimeout(() => {
      synth.speak(text_speak);
    }, 500);
  }

  async function aiResponse(prompt) {
    let text = await run(prompt);

    let newText = text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/google/gi, "Mahesh")
      .trim();

    setPrompt(newText);
    speak(newText);
    setResponse(true);

    setTimeout(() => {
      setSpeaking(false);
    }, 5000);
  }

  let speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!speechRecognition) {
    console.error("Speech Recognition is not supported on this browser.");
  } else {
    let recognition = new speechRecognition();
  }

  let recognition = new speechRecognition();
  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setPrompt(transcript);
    takeCommand(transcript.toLowerCase());
  };

  function takeCommand(command) {
    if (command.includes("open youtube")) {
      window.open("https://www.youtube.com", "_blank");
      speak("Opening YouTube");
      setPrompt("Opening YouTube...");
      setResponse(true);
    } else if (command.includes("open google")) {
      window.open("https://www.google.com", "_blank");
      speak("Opening Google");
      setPrompt("Opening Google...");
      setResponse(true);
    } else if (command.includes("open instagram")) {
      window.open("https://www.instagram.com", "_blank");
      speak("Opening Instagram");
      setPrompt("Opening Instagram...");
      setResponse(true);
    } else if (command.includes("open linkedin")) {
      window.open("https://www.linkedin.com", "_blank");
      speak("Opening LinkedIn");
      setPrompt("Opening LinkedIn...");
      setResponse(true);
    } else if (command.includes("open whatsapp")) {
      window.open("https://web.whatsapp.com", "_blank");
      speak("Opening WhatsApp");
      setPrompt("Opening WhatsApp...");
      setResponse(true);
    } else if (
      command.includes("what is today's date") ||
      command.includes("tell me the date")
    ) {
      let today = new Date().toLocaleDateString();
      speak(`Today's date is ${today}`);
      setPrompt(`Today's date is ${today}`);
      setResponse(true);
    } else if (
      command.includes("what is the time") ||
      command.includes("tell me the time")
    ) {
      let time = new Date().toLocaleTimeString();
      speak(`The current time is ${time}`);
      setPrompt(`The current time is ${time}`);
      setResponse(true);
    } else if (
      command.includes("what is your name") ||
      command.includes("apka naam kya hai") ||
      command.includes("tera nam kya hai") ||
      command.includes("tujh nav ky ahe")
    ) {
      let names = {
        English: "I am Neo, part of Project Kalchakra 1.",
        Hindi: "मैं नियो हूँ, प्रोजेक्ट कालचक्र 1 का हिस्सा।",
      };

      let languages = Object.keys(names);
      let randomLang = languages[Math.floor(Math.random() * languages.length)];
      let responseText = names[randomLang];

      speak(responseText);
      setPrompt(responseText);
      setResponse(true);
    } else if (command.includes("who created you")) {
      speak("I was created by Mahesh.");
      setPrompt("I was created by Mahesh.");
      setResponse(true);
    } else if (command.includes("how are you")) {
      speak("I am doing great! Thanks for asking.");
      setPrompt("I am doing great! Thanks for asking.");
      setResponse(true);
    } else {
      // Default AI response for unrecognized commands
      aiResponse(command);
    }

    // Reset speaking state after 5 seconds for all responses
    setTimeout(() => {
      setSpeaking(false);
    }, 5000);
  }

  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse,
  };

  return (
    <div>
      <datacontext.Provider value={value}>{children}</datacontext.Provider>
    </div>
  );
}

export default UserContext;
