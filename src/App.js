import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Your Pet's name will appear here.");

  const emojiDictionary = {
    "🐄": "Cow",
    "🐷": "Pig Face",
    "🐖": "Pig",
    "🐗": "Boar",
    "🐽": "Pig Nose",
    "🐏": "Ram",
    "🐑": "Ewe",
    "🐐": "Goat",
    "🐪": "Camel",
    "🐫": "Two-Hump Camel"
  };

  const emojis = Object.keys(emojiDictionary);

  function changeHandler(event) {
    var emoji = event.target.value;
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "We don't have this in our database!";
    } else {
      setEmoji(emoji);
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Your Pet Your Emoji!</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Please put your emojis here."}
        style={{ padding: "1rem", width: "80%" }}
      />
      <h2>{emoji}</h2>
      <h2>{meaning}</h2>
      <span>
        {emojis.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{ cursor: "pointer", fontSize: "2rem", padding: "2.5rem" }}
            >
              {emoji}
            </span>
          );
        })}
        ;
      </span>
    </div>
  );
}
