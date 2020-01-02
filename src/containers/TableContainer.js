import Table from "../components/Table"
import { connect } from "react-redux"

const mapStateToProps = state => ({
  table: state.table
})

export default connect(mapStateToProps, null)(Table)
