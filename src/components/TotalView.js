import React from "react"
import TableContainer from "../containers/TableContainer"

class TotalView extends React.Component {
  componentDidMount = () => {
    this.div.focus()
  }

  handleKeyPress = e => {
    console.log(e.key)
    switch(e.key){
      case 'Enter':
        return this.props.onStart()
      case 'ArrowLeft':
        return this.props.onMoveLeft()
      case 'ArrowRight':
        return this.props.onMoveRight()
      case 'ArrowDown':
        return this.props.onMoveDown()
      case ' ':
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
        style={{outline: 0}}
        ref={ref => {this.div = ref}}
      >
        <TableContainer />
      </div>
    )
  }
}

export default TotalView
