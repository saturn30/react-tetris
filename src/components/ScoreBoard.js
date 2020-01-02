import React from "react"

const ScoreBoard = props => {
  return (
    <div style={{textAlign: 'center'}}>
      레벨 : {props.level}
      <br />
      점수 : {props.score}
    </div>
  )
}

export default ScoreBoard
