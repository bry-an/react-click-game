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
    highScore: 0,
    scoreColor: '#222',
    msg: ''
  };


  pictureClickHandler = id => {
    this.state.clickedImageIds.includes(id)
      ? this.gameOver(id)
      : this.setState({
        msg: '',
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
  gameOver = () => {
    this.setState({
      clickedImageIds: [],
      score: 0,
      msg: 'You already clicked that one! Click an image to play again.'
    });

  };

  updateHighScore = score => {
    if (score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
    if (score === 12) {
      this.setState({
        msg: 'You got all 12! Nice job!'
      })
    }
  };

  render() {
    return (
      <div className="App">
        <StatusBar
          score={this.state.score}
          highScore={this.state.highScore}
          color={this.state.scoreColor}
          msg={this.state.msg}
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
