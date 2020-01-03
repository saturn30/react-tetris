import * as types from './actionTypes'

export const start = () => ({
  type: types.START
})

export const moveLeft = () => ({
  type: types.MOVE_LEFT
})

export const moveRight = () => ({
  type: types.MOVE_RIGHT
})

export const moveDown = () => ({
  type: types.MOVE_DOWN
})

export const moveEnd = () => ({
  type: types.MOVE_END
})

export const rotate = () => ({
  type: types.ROTATE
})
