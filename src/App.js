import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import Header from "./Header";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  //const [answer, setAnswer] = useState("Yes");
  const [color, setColor] = useState("");

  let audio = new Audio("https://s3retentionsample-s3bucket-ga845w00vbix.s3-us-west-2.amazonaws.com/laughTrack/comic005.wav");
  let audio2 = new Audio("https://s3retentionsample-s3bucket-ga845w00vbix.s3-us-west-2.amazonaws.com/cricket2/cricket.wav");
  let audio3 = new Audio("https://s3retentionsample-s3bucket-ga845w00vbix.s3-us-west-2.amazonaws.com/budump/Ba-Bum-Tss-Joke-Drum-A2-www.fesliyanstudios.com.mp3");
  let audio4 = new Audio("https://s3retentionsample-s3bucket-ga845w00vbix.s3-us-west-2.amazonaws.com/booooo/boohiss.wav");

  function funny() {
    audio.play();
    setCount(prevCount => prevCount + 1);
  }

  function notFunny() {
    audio2.play();
    setCount(prevCount => prevCount - 1);
  }

  function funnyToo() {
    audio3.play();
    setCount(prevCount => prevCount + 1);
  }

  function notfunnyToo() {
    audio4.play();
    setCount(prevCount => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);
  console.log(color);
  return (
    <div>
      <Header color={color} />
      <div className="p">
        <p style={{ fontSize: "20px" }}> Click to backup or tear down a funny or not so funny joke.</p>
        <span>
          <button onClick={funny} style={{ backgroundColor: color, border: "1px solid black" }}>
            Funny
          </button>
          Or
          <button onClick={notFunny} style={{ backgroundColor: color, border: "1px solid black" }}>
            Not Funny
          </button>
        </span>
        <span>
          <button onClick={funnyToo} style={{ backgroundColor: color, border: "1px solid black" }}>
            Funny
          </button>
          Or
          <button onClick={notfunnyToo} style={{ backgroundColor: color, border: "1px solid black" }}>
            Not Funny
          </button>
        </span>
      </div>
    </div>
  );
}

export default App;

//https://s3retentionsample-s3bucket-ga845w00vbix.s3-us-west-2.amazonaws.com/booooo/boohiss.wav
//https://s3retentionsample-s3bucket-ga845w00vbix.s3-us-west-2.amazonaws.com/budump/Ba-Bum-Tss-Joke-Drum-A2-www.fesliyanstudios.com.mp3
//https://s3retentionsample-s3bucket-ga845w00vbix.s3-us-west-2.amazonaws.com/cricket2/cricket.wav
