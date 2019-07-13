import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Main extends Component {

  a = "I GOT IT"

  handleClick1() {
    console.log(this.a)
  }

  handleClick2 = () => {
    console.log(this.a)
  }

  render() {
    return <div>
      <button onClick={this.handleClick1}>Button 1</button>
      <button onClick={() => this.handleClick1()}>Button 2</button>
      <button onClick={function() { this.handleClick1() }}>Button 3</button>
      <button onClick={this.handleClick2}>Button 4</button>
      <button onClick={() => this.handleClick2()}>Button 5</button>
      <button onClick={function() { this.handleClick2() }}>Button 6</button>
    </div>
  }
}

ReactDOM.render(<Main />, document.getElementById("app"))
