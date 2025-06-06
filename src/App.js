import React, { useState } from "react";
import "./App.css";

const truths = [
  "What is your wildest sexual fantasy?",
  "Have you ever touched yourself thinking of me?",
  "Which outfit of mine turns you on the most?",
  "Have you ever faked it? Why?",
  "What's something you've always wanted to try in bed but never said?",
  "What's your favorite part of my body to kiss?",
  "Have you ever watched adult videos with me in mind?",
  "Have you ever wanted to try roleplay? What kind?",
  "Have you ever had a naughty thought during a serious moment?",
  "What is your biggest turn-on that you've never shared?",
  "What is the most public place you've thought about doing it?",
  "Have you ever fantasized about someone else while with me?",
  "If you could change one thing about our sex life, what would it be?",
  "What was your best sexual experience ever?",
  "Do you prefer fast and rough or slow and sensual?",
  "What do you think about when you're turned on?",
  "Would you try toys in bed? Which ones?",
  "Have you ever wanted to record us?",
  "Do you like being dominant or submissive?",
  "Have you ever had a sex dream about me?",
  "What’s your secret turn-on?",
  "Would you be up for a quickie in public?",
  "Do you like talking dirty or being talked dirty to?",
  "What's the naughtiest thing you've done when home alone?",
  "What’s your opinion on lingerie or costumes?",
  "Have you ever roleplayed in real life?",
  "What's something you've always wanted to do in the shower?",
  "Do you like being teased or teasing?",
  "Have you ever had a naughty thought during work/school?",
  "What's one thing you want me to do to you right now?",
  "Do you have a favorite sexy memory with me?",
  "Do you like being watched or watching others?",
  "Have you ever had a sensual massage?",
  "Have you ever tried sexting? Did it turn you on?",
  "Do you like it rough or romantic?",
  "Have you ever been caught in the act?",
  "What’s the kinkiest thought you’ve had about me?",
  "Would you try handcuffs or blindfolds?",
  "What turns you off instantly?",
  "What do you wear when you're alone and thinking of me?",
  "Would you ever go to a nude beach with me?",
  "What do you fantasize about when you're bored?",
  "Do you like foreplay more than the main act?",
  "Would you like to recreate a scene from a movie?",
  "What sound or phrase gets you instantly aroused?",
  "Would you try mutual touching without kissing?",
  "Do you enjoy biting/being bitten?",
  "Do you like morning intimacy or night?",
  "What’s your favorite dirty compliment to receive?",
  "Would you rather dominate or be dominated tonight?",
  "Would you let me tie you up and do anything I want to you?",
  "Describe in detail how you'd want me to take control tonight.",
  "Have you ever fantasized about being completely dominated?",
  "If I blindfolded you, what would you want me to do first?",
  "Would you let me tease you until you're begging to finish?",
  "What's the sexiest thing I could whisper in your ear right now?",
  "Would you ever want to be caught in the act? Where and how?",
  "What's your ultimate sex scene from a movie you'd recreate?",
  "Would you want to have an all-night session with no rules?",
  "What’s the most sensitive part of your body you wish I’d explore more?",
  // Add more up to 50
];

const dares = [
  "Lie down and let me remove each piece of clothing slowly with my mouth.",
  "Give me a 1-minute lap dance.",
  "Kiss my lips, neck, and one place of your choice.",
  "Send me a naughty text from across the room.",
  "Do a slow strip tease to music.",
  "Use your mouth to tease me for 30 seconds—no hands.",
  "Lick something sweet (like chocolate or whipped cream) off me.",
  "Do a seductive catwalk toward me.",
  "Whisper the dirtiest thought you’ve had today.",
  "Spank me gently 5 times.",
  "Remove one piece of clothing with your teeth.",
  "Dance on my lap like I'm your private audience.",
  "Give me a massage but use only your lips.",
  "Recreate your favorite sexy movie scene.",
  "Touch yourself while maintaining eye contact.",
  "Blindfold me and kiss anywhere you want.",
  "Use ice on a part of my body for 30 seconds.",
  "Moan my name slowly and loudly.",
  "Act out a fantasy you’ve had involving me.",
  "Play strip truth or dare (remove one item now).",
  "Lick from my neck to my belly.",
  "Send me a selfie right now in your hottest pose.",
  "Pick a toy and use it on me (or pretend if not available).",
  "Suck on my finger while making eye contact.",
  "Slide your hand under my clothes for 10 seconds.",
  "Act out a seduction scene from a movie.",
  "Do something you’ve never dared before with me.",
  "Give me a hickey where it can’t be seen.",
  "Let me sit on your lap while you whisper naughty things.",
  "Roleplay a scenario that turns you on.",
  "Call me something dirty in a soft whisper.",
  "Touch my inner thigh but don’t go all the way.",
  "Let me tie your hands for 1 minute.",
  "Dance with me as close and slow as possible.",
  "Give me a naughty nickname and say it 3 times seductively.",
  "Feed me something using your mouth only.",
  "Read a sexy story out loud.",
  "Take a sexy photo (and show only to me).",
  "Kiss me passionately like it's the last time.",
  "Give me a massage using oil or lotion.",
  "Use your tongue to write something on my body.",
  "Take a selfie kissing any part of me.",
  "Tease me with just your voice for 1 minute.",
  "Let me touch you anywhere for 30 seconds.",
  "Do a slow dance in your underwear.",
  "Gently bite my earlobe.",
  "Run your fingers over my chest and whisper a secret.",
  "Play 7 minutes in heaven (you decide how).",
  "Let me sit on your back as you crawl toward me slowly.",
  "Lie down and let me explore you.",
  "Use only your lips to move an object across the room.",
  "Write something sexy on me with a marker.",
  "Act like a sexy character for the next 2 minutes.",
  "Push me against a wall and kiss me.",
  "Do something naughty but stop just before I beg.",
  "Whisper what you’ll do to me tonight.",
  "Give me a peek show—slow and teasing.",
  "Let me undress you slowly while you stare at me.",
  "Let me trace your body outline with my fingers.",
  "Twerk or grind on me for 20 seconds.",
  "Do a slow body roll facing me.",
  "Put my hand wherever you want it.",
  "Whisper 3 things you'd do if there were no limits.",
  "Get on all fours and let me admire you while you moan my name.",
  "Let me kiss down your body until you say ‘please’.",
  "Ride an imaginary version of me like it’s real.",
  "Straddle me and tell me how badly you want it.",
  "Lay back and simulate an orgasm like you're on camera.",
  "Blindfold yourself and let me guide your hands.",
  "Moan every time I say your name—louder each time.",
  "Lick your lips and slowly describe what you want to do to me.",
  "Hold my gaze and remove one item of clothing every 15 seconds.",
  "Use your fingers and whisper what you’re imagining they are.",
  "Act like I’m pinning you down and you don’t want me to stop.",
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
