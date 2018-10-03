import React from "react";
import "./StatusBar.css";

const StatusBar = props => {
  return (
  <div id="status-bar" >
  <ul>
      <li>
          Score: {props.score}
      </li>
      <li>
          High Score: {props.highScore}
      </li>
  </ul>
  </div>


  )
};
export default StatusBar;
