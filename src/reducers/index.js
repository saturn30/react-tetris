import * as types from "../actions/actionTypes"
import {
  initTable,
  start,
  moveLeft,
  moveRight,
  moveDown,
  moveEnd,
  rotate
} from "./TableFunc"

const initialState = {
  table: initTable(),
  location: [0, 0],
  nowBlock: [],
  nextBlock: [],
  score: 0,
  level: 1,
  isRunning: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START:
      return start(state)
    case types.MOVE_LEFT:
      return moveLeft(state)
    case types.MOVE_RIGHT:
      return moveRight(state)
    case types.MOVE_DOWN:
      return moveDown(state)
    case types.MOVE_END:
      return moveEnd(state)
    case types.ROTATE:
      return rotate(state)
    default:
      return state
  }
}

export default reducer
