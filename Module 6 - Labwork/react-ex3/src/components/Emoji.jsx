import { useState } from "react";

function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  function changeMood() {
    setIsHappy(!isHappy);
  }

  return (
    <div className="emoji-container">
      <h2>{isHappy ? "😊" : "😢"}</h2>

      <button onClick={changeMood}>
        Change Mood
      </button>
    </div>
  );
}

export default Emoji;