import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    count : 0
  }

  add = () => {
    console.log("add")
    this.setState(current => ({ count: current.count+100000000 }))
  }

  minus = () => {
    console.log("minus")
    this.setState(current => ({ count: current.count-1 }))
  }

  zero = () => {
    console.log("zero")
    this.setState(current => ({ count: 0 }))
  }

  render() {
    return (
      <div>
        <h1> Number is : {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.zero}>zero</button>
      </div>
    )
  }
}



export default App;
