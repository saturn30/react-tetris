import NextBlock from '../components/NextBlock'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  nextBlock : state.nextBlock
})

export default connect(mapStateToProps, null)(NextBlock)