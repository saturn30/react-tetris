import React from "react"
import Block from "./Block"
import BlockContainer from '../containers/BlockContainer'

class Table extends React.Component {
  
  render() {
    return (
      <div
        style={{
          width: 300,
          display: 'inline-block'
        }}
      >
        {this.props.table.map((array, i) => (
          <div key={i} style={{ padding: 0, height: 30 }}>
            {array.map((item, j) => (
              <BlockContainer i = {i} j = {j} key={j}/>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default Table
