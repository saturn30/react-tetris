import TotalView from "../components/TotalView"
import * as actions from '../actions'
import { connect } from "react-redux"

const mapStateToProps = state => ({
  isRunning: state.isRunning,
  level: state.level
})

const mapDispatchToProps = dispatch => ({
  onMoveLeft: () => dispatch(actions.moveLeft()),
  onMoveRight: () => dispatch(actions.moveRight()),
  onMoveDown: () => dispatch(actions.moveDown()),
  onMoveEnd: () => dispatch(actions.moveEnd()),
  onStart: () => dispatch(actions.start()),
  onRotate: () => dispatch(actions.rotate())
})

export default connect(mapStateToProps, mapDispatchToProps)(TotalView)