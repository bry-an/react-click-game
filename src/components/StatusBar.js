import React from "react";
import "./StatusBar.css";

const StatusBar = props => {
  return (
      
  <div id="status-bar" >
  <div id='chem-clickey'>
  Chemistry Clickey
  </div>
  <div id='status-msg'>
      {props.msg || (12 - props.score) + ' molecules left'}
      </div>
  <ul id= 'scores-list'>
      <li>
          Score <span id='score-text'>{props.score}</span>
      </li>
      <li>
          High Score <span id='high-score-text'>{props.highScore}</span>
      </li>
  </ul>
  </div>


  )
};
export default StatusBar;
