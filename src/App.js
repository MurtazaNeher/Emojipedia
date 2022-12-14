import React, { useState } from "react";
import "./styles.css";

var emojiData = {
  "π": "smiling",
  "π": "Grinning Face",
  "π": "Slightly Smiling Face",
  "π": "Smiling Face with Halo",
  "π€©": "Star-Struck",
  "π": "Kissing Face with Closed Eyes",
  "π": "Upside-Down Face",
  "π": "Winking Face",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Face with Tongue",
  "π": "Winking Face with Tongue",
  "π€ͺ": "Zany Face",
  "π": "Squinting Face with Tongue",
  "π€": "Money-Mouth Face",
  "π€": "Smiling Face with Open Hands",
  "π€­": "Face with Hand Over Mouth",
  "π": "Smiling Face with Heart-Eyes",
  "π": "Face Blowing a Kiss",
  "π€": "Thinking Face",
  "πΆ": "Face Without Mouth",
  "π€§": "Sneezing Face",
  "π": "Relieved Face",
  "π": "Pensive Face",
  "π€": "Zipper-Mouth Face",
  "π€¨": "Face with Raised ",
  "π": "Neutral Face",
  "π": "Expressionless Face",
  // "πΆβπ«οΈ": "Face in Clouds",
  "π": "Smirking Face",
  "π": "Unamused Face",
  "π": "Face with Rolling Eyes",
  "π¬": "Grimacing Face",
  "π‘": "Enraged Face",
  "π₯΅": "Hot Face",
  "π΄": "Sleeping Face",
  "π": "Kiss Mark",
  "π΅": "Face with Crossed-Out Eyes",
  // "π΅βπ«": "Face with Spiral Eyes",
  "π€―": "Exploding Head",
  "π€ ": "Cowboy Hat Face",
  "π₯³": "Partying Face",
  "π₯Έ": "Disguised Face",
  "π": "Smiling Face with Sunglasses",
  "π": "Clapping Hands",
  "π": "Raising Hands"
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
