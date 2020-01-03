import React from "react"
import TableContainer from "../containers/TableContainer"
import NextBlockContainer from "../containers/NextBlockContainer"
import ScoreBoardContainer from "../containers/ScoreBoardContainer"

class TotalView extends React.Component {
  componentDidMount = () => {
    this.div.focus()
  }

  componentDidUpdate = () => {
    const { isRunning, onMoveDown, level } = this.props
    if (isRunning && !this.setInterval) {
      this.setInterval = true
      this.intervalDown = setInterval(
        onMoveDown,
        1000 - (level > 9 ? 900 : level * 100)
      )
    } else {
      clearInterval(this.intervalDown)
      this.setInterval = false
    }
  }

  handleKeyPress = e => {
    const isRunning = this.props.isRunning
    console.log(e.key)
    switch (e.key) {
      case !isRunning && "Enter":
        return this.props.onStart()
      case "ArrowLeft":
        return isRunning && this.props.onMoveLeft()
      case "ArrowRight":
        return isRunning && this.props.onMoveRight()
      case "ArrowDown":
        return isRunning && this.props.onMoveDown()
      case "ArrowUp":
        return isRunning && this.props.onRotate()
      case " ":
        return isRunning && this.props.onMoveEnd()
      default:
        return
    }
  }

  render() {
    return (
      <div
        onKeyDown={this.handleKeyPress}
        tabIndex="0"
        style={{ 
          outline: 0,
          textAlign: 'center',
          padding: 50,
        }}
        ref={ref => {
          this.div = ref
        }}
      >
        <TableContainer />
        <div
          style={{
            display: "inline-block",
            margin: 30,
            verticalAlign: "top",
            width: 150
          }}
        >
          <NextBlockContainer />
          <ScoreBoardContainer />
        </div>
      </div>
    )
  }
}

export default TotalView
