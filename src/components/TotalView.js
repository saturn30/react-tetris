import React from "react"
import TableContainer from "../containers/TableContainer"
import NextBlockContainer from "../containers/NextBlockContainer"
import ScoreBoardContainer from "../containers/ScoreBoardContainer"

class TotalView extends React.Component {
  componentDidMount = () => {
    this.div.focus()
  }

  handleKeyPress = e => {
    console.log(e.key)
    switch (e.key) {
      case "Enter":
        return this.props.onStart()
      case "ArrowLeft":
        return this.props.onMoveLeft()
      case "ArrowRight":
        return this.props.onMoveRight()
      case "ArrowDown":
        return this.props.onMoveDown()
      case " ":
        return this.props.onMoveEnd()
      default:
        return
    }
  }

  render() {
    return (
      <div
        onKeyDown={this.handleKeyPress}
        tabIndex="0"
        style={{ outline: 0 }}
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
