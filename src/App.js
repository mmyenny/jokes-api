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
    //Make http request
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        //sets state to the results
        this.setState({
          joke: response.data.setup,
          punchline: response.data.punchline
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Random Jokes Generator</h1>
        <main>
          <p>{this.state.joke}</p>
          <p>{this.state.punchline}</p>
          <button onClick={this.getRandomJoke}>Click Here</button>
        </main>
        <div className="image" />
      </div>
    )
  }
}

export default App
