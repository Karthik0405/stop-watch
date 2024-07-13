// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    clearInterval(this.stopClock)
  }

  stopWatch = () => {
    clearInterval(this.stopClock)
  }

  startWatch = () => {
    this.stopClock = setInterval(this.cloack, 1000)
  }

  restartStop = () => {
    this.setState({
      seconds: 0,
    })
    clearInterval(this.stopClock)
  }

  cloack = () => {
    const {seconds} = this.state
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  timerButtons = () => {
    return (
      <div className="buttons-container">
        <button
          className="timer-button button-background-1"
          onClick={this.startWatch}
        >
          Start
        </button>
        <button
          className="timer-button button-background-2"
          onClick={this.stopWatch}
        >
          Stop
        </button>
        <button
          className="timer-button button-background-3"
          onClick={this.restartStop}
        >
          Reset
        </button>
      </div>
    )
  }

  gettingTimeInMinutes = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const resultMin = minutes > 9 ? minutes : `0${minutes}`
    const second = Math.floor(seconds % 60)
    const resultSec = second > 9 ? second : `0${second}`
    return `${resultMin}:${resultSec}`
  }

  gettingTime = () => {
    return (
      <div>
        <h1 className="time-value">{this.gettingTimeInMinutes()}</h1>
      </div>
    )
  }

  render() {
    return (
      <div className="stop-watch-container">
        <h1 className="stop-watch-heading">Stopwatch</h1>
        <div className="stop-watch-timer-container">
          <div className="stop-watch-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stoper-img"
            />
            <p className="timer-heading">Timer</p>
          </div>
          {this.gettingTime()}
          {this.timerButtons()}
        </div>
      </div>
    )
  }
}

export default Stopwatch
