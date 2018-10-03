import React, { Component } from "react";
import chemicals from "./chemicals.json";
import PictureItem from "./components/PictureItem";
import StatusBar from "./components/StatusBar";
import "./App.css";

class App extends Component {
  state = {
    randomImages: chemicals,
    clickedImageIds: [],
    score: 0,
    highScore: 0
  };


  pictureClickHandler = id => {
    console.log("clickey");

    this.state.clickedImageIds.includes(id)
      ? this.gameOver(id)
      : this.setState({
          clickedImageIds: [...this.state.clickedImageIds, id],
          score: this.state.score + 1,
          randomImages: this.shuffleArray(this.state.randomImages)
        }, () => this.updateHighScore(this.state.score));
  };

  shuffleArray = array => {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  };
  gameOver = id => {
    this.setState({
      clickedImageIds: [],
      score: 0
    });
  };

  updateHighScore = score => {
    console.log('score', score)
    if (score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
  };

  render() {
    return (
      <div className="App">
        <StatusBar 
          score={this.state.score} 
          highScore={this.state.highScore}
          />
        <div className="images">
          {this.state.randomImages.map(chemical => {
            return (
              <PictureItem
                key={chemical.id}
                id={chemical.id}
                imageSrc={chemical.url}
                pictureClickHandler={this.pictureClickHandler}
                dataId={chemical.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
