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
    if (this.state.clickedImageIds.length === 0) {
      this.setState({
        msg: ''
      })
    }
    if (this.state.score === 12) {
      this.setState({
        score: 1,
        clickedImageIds: [id],
        msg: ''
      }, () => this.updateHighScore(this.state.score))
      return
    }

    if (this.state.clickedImageIds.length === 0 && id=== 2) {
      this.setState({
        msg: 'BONUS WIN!! Aminopterin was the first effective chemotherapy drug',
        score: 12,
        highScore: 12
      })
      return
    }

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
  gameOver = () => {
    this.setState({
      clickedImageIds: [],
      score: 0,
      msg: 'Already clicked that one! Choose another molecule to start over'
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
        msg: 'You got all 12! Nice job!',
        score: 0,
        clickedImageIds: []
      })
    }
  };

  render() {
    return (
      <div className="App">
      <div className='app-header'>
      <h1>
        Welcome to Chemistry Clickey
      </h1>
      <h2>
        Challenging your memory (and chemistry) skills!
      </h2>
      <h3>
        Instructions:
      </h3>
      </div>
        <div className='instructions'>
        <p>It's classic Memory with organic molecules!</p>
        <p>Click a molecule, get a point. Then click different molecules to rack up more points.</p>
        <p>Click the same molecule, lose the game! Get through all 12, win the game!</p>
        </div>
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
