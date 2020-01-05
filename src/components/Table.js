import React from "react"
import BlockContainer from '../containers/BlockContainer'

class Table extends React.Component {
  render() {
    const initTable= []
    for(let i = 0; i < 20; i++){
      const line = []
      for(let j = 0; j < 10; j++){
        line.push(0)
      }
      initTable.push(line)
    }
    return (
      <div
        style={{
          width: 300,
          display: 'inline-block'
        }}
      >
        {initTable.map((array, i) => (
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
