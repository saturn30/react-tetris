import ScoreBoard from '../components/ScoreBoard'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  score : state.score,
  level : state.level
})

export default connect(mapStateToProps, null)(ScoreBoard)