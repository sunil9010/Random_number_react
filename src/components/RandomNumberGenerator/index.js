// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  change = () => {
    const random = Math.random()
    this.setState({count: Math.ceil(random * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="inner-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="generate-button"
              onClick={this.change}
            >
              Generate
            </button>
            <p className="random-number">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
