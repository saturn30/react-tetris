import React from "react"

const ScoreBoard = props => {
  return (
    <div style={{ textAlign: "center" }}>
      레벨 : {props.level}
      <br />
      <br />
      점수 : {props.score}
      <br />
      <br />
      <br />
      <br />
      시작/재시작 : Enter
      <br />
      <br />
      이동 : ← → ↓
      <br />
      <br />
      회전 : ↑
      <br />
      <br />
      제일 아래로 : space
    </div>
  )
}

export default ScoreBoard
