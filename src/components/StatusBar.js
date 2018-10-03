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
          <span style = {divStyle}> Score <span style id='score'>{props.score}</span></span>
      </li>
      <li>
          High Score <span id='high-score-text'>{props.highScore}</span>
      </li>
  </ul>
  </div>


  )
};
export default StatusBar;
