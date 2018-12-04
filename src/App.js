import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      joke: '',
      punchline: ''
    }
  }
  getRandomJoke = event => {
    axios
      .get('https://safe-falls-22549.herokuapp.com/random_joke')
      .then(response => {
        console.log(response.data)
        const newState = {
          joke: response.data.setup,
          punchline: response.data.punchline
        }
        this.setState(newState)
      })
    console.log('hello')
  }

  render() {
    return (
      <div className="App">
        <h1>Random Jokes Generator</h1>
        <p>{this.state.joke}</p>
        <p>{this.state.punchline}</p>
        <button onClick={this.getRandomJoke}>Click Here</button>
      </div>
    )
  }
}

export default App
