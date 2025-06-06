import React, { useState } from "react";
import "./App.css";

const truths = [
  "What is your wildest sexual fantasy?",
  "Have you ever touched yourself thinking of me?",
  "Which outfit of mine turns you on the most?",
  "Have you ever faked it? Why?",
  "What's something you've always wanted to try in bed but never said?",
  // Add more up to 50
];

const dares = [
  "Give me a 1-minute lap dance.",
  "Kiss my lips, neck, and one place of your choice.",
  "Send me a naughty text from across the room.",
  "Do a slow strip tease to music.",
  "Use your mouth to tease me for 30 seconds—no hands.",
  // Add more up to 50
];

function App() {
  const [mode, setMode] = useState(null);
  const [prompt, setPrompt] = useState("");

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const handleChoice = (type) => {
    setMode(type);
    setPrompt(type === "truth" ? getRandom(truths) : getRandom(dares));
  };

  return (
    <div className="app">
      <h1>🔥 Spicy Truth or Dare 🔥</h1>
      <div className="buttons">
        <button onClick={() => handleChoice("truth")}>Truth</button>
        <button onClick={() => handleChoice("dare")}>Dare</button>
      </div>
      {prompt && (
        <div className="card">
          <strong>{mode === "truth" ? "Truth" : "Dare"}:</strong> {prompt}
        </div>
      )}
    </div>
  );
}

export default App;
