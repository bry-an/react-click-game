import React from "react";
import "./StatusBar.css";

const StatusBar = props => {
    const divStyle = {
        color: props.color
    }
  return (
      
  <div id="status-bar" >
  <ul id= 'scores-list'>
      <li>
          Score <span id='score'>{props.score}</span>
      </li>
      <li>
          High Score <span id='high-score-text'>{props.highScore}</span>
      </li>
      <p>{props.msg}</p>
  </ul>
  </div>


  )
};
export default StatusBar;
