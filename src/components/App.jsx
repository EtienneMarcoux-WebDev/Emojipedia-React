import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function CreateCard(emojicard) {
  return (
    <Card
      key={emojicard.id}
      id={emojicard.id}
      emoji={emojicard.emoji}
      name={emojicard.name}
      meaning={emojicard.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(CreateCard)}
    </div>
  );
}

export default App;
