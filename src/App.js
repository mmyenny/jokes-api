import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  getRandomJoke = event => {
    axios
      .get('https://safe-falls-22549.herokuapp.com/random_joke')
      .then(response => {
        console.log(response.data)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Random Jokes Generator</h1>
        <p />
        <button onClick={this.getRandomJoke}>Click Here</button>
      </div>
    )
  }
}

export default App
