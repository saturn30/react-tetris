import React from "react"
import Block from "./Block"

class Table extends React.Component {
  
  render() {
    return (
      <div
        style={{
          width: 300,
          display: 'inline-block'
        }}
      >
        {this.props.table.map((array, index) => (
          <div key={index} style={{ padding: 0, height: 30 }}>
            {array.map((item, index) => (
              <Block color={item} key={index}>
                
              </Block>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default Table
