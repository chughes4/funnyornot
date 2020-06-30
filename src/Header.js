import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header style={{ backgroundColor: props.color, color: "black" }}>
      <img src={require("./img/10579014.jpg")} alt="Problem?" />
      <p>Funny or Not?</p>
    </header>
  );
}

export default Header;
