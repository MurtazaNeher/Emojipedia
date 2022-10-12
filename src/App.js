import React, { useState } from "react";
import "./styles.css";

var emojiData = {
  "😊": "smiling",
  "😀": "Grinning Face",
  "🙂": "Slightly Smiling Face",
  "😇": "Smiling Face with Halo",
  "🤩": "Star-Struck",
  "😚": "Kissing Face with Closed Eyes",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "🤣": "Rolling on the Floor Laughing",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "🤔": "Thinking Face",
  "😶": "Face Without Mouth",
  "🤧": "Sneezing Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised ",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  // "😶‍🌫️": "Face in Clouds",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😡": "Enraged Face",
  "🥵": "Hot Face",
  "😴": "Sleeping Face",
  "💋": "Kiss Mark",
  "😵": "Face with Crossed-Out Eyes",
  // "😵‍💫": "Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🥸": "Disguised Face",
  "😎": "Smiling Face with Sunglasses",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands"
};
var emojiWeKnow = Object.keys(emojiData);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiData[userInput];

    if (meaning === undefined) {
      meaning = "Sorry ! We dont have this in our data base.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiData[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 class="header">Emojipedia</h1>
      <p className="devName" style={{ color: "black" }}>
        Enter your emojis here.
      </p>
      <input className="inputBox" onChange={emojiInputHandler} />
      <h2 className="meaning">{meaning}</h2>
      <h3 className="heading">Emojis we know</h3>
      <p className="devName" style={{ color: "black" }}>
        Click on the emoji to know thier meaning.
      </p>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            className="emojiDisplay"
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <p>Currently we have limitted data base , we will upgrade it shortly.</p>

      <div className="footer">
        <h3 className="devName">
          DEV : <span className="devName2">Murtaza Neher Wala </span>
        </h3>

        <a
          className="sBtn"
          href="https://www.instagram.com/murtaza_neher_wala/?utm_medium=copy_link"
        >
          Instagram
        </a>

        <a className="sBtn" href="https://murtazaneherwala.netlify.app/">
          Portfolio
        </a>
        <a className="sBtn" href="https://github.com/MurtazaNeher">
          Github
        </a>

        <a
          className="sBtn"
          href="https://twitter.com/Murtaza_neher?t=KjQ1giMXozsd4enZDMxNYg&s=03"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
