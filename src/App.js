import React, { Component } from 'react';
import './App.css';
import chemicals from '../public/chemicals.json'
import PictureItem from './components/PictureItem'

class App extends Component {
  state = {
    clickedImageIds: [], 
    score: 0
  }

  pictureClickHandler = id => {
    this.setState({

    })

  }
  render() {
    return (
      <div className="App">
      {chemicals.map(chemical => {
        <PictureItem 
      })}
      
      </div>
    );
  }
}

export default App;
