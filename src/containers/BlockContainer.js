import Block from '../components/Block'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const {i, j} = ownProps
  return({
    color: state.table[i][j]
  })
}

export default connect(mapStateToProps, null)(Block)