import TotalView from "../components/TotalView"
import * as actions from '../actions'
import { connect } from "react-redux"

const mapDispatchToProps = dispatch => ({
  onMoveLeft: () => dispatch(actions.moveLeft()),
  onMoveRight: () => dispatch(actions.moveRight()),
  onMoveDown: () => dispatch(actions.moveDown()),
  onMoveEnd: () => dispatch(actions.moveEnd()),
  onStart: () => dispatch(actions.start())
})

export default connect(null, mapDispatchToProps)(TotalView)