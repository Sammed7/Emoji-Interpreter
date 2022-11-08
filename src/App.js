import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😄": "Smiling",
  "😧": "Surprised",
  "😡": "Angry",
  "😴": "Sleepy",
  "🤒": "Sick",
  "❤️": "Red heart",
  "😋": "Delicious Food",
  "😘": "Face Blowing a Kiss",
  "☹️": "sad",
  "😭": "Crying"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! we don't have this in our Database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter! </h1>
      <input onChange={emojiChangeHandler} />
      <h2> {meaning} </h2>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
// VISER--
// VIEW -- INTERACT -- STATE IN EVENT HANDLER -- RENDER
