import React from "react"
import Block from "./Block"

const NextBlock = props => {
  return (
    <div style={{ display: "inline-block", width: '100%', height: 150, textAlign: 'center' }}>
      next
      <br /><br />
      {props.nextBlock.map((array, index) => (
        <div style={{ height: 30 }}>
          {array.map((item, index) => (
            <Block color={item ? item : "border none"} key={index} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default NextBlock
