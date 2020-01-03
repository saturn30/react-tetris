import produce from "immer"

export const initTable = () => {
  const table = []
  for (let i = 0; i < 20; i++) {
    table.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }
  return table
}

export const getRandomBlock = () => {
  const blocks = [
    [[1, 1, 1, 1]],
    [
      [2, 0],
      [2, 0],
      [2, 2]
    ],
    [
      [0, 3],
      [0, 3],
      [3, 3]
    ],
    [
      [0, 4, 0],
      [4, 4, 4]
    ],
    [
      [5, 5, 0],
      [0, 5, 5]
    ],
    [
      [0, 6, 6],
      [6, 6, 0]
    ],
    [
      [7, 7],
      [7, 7]
    ]
  ]
  return blocks[Math.floor(Math.random() * blocks.length)]
}

export const drawBlock = (table, location, block) => {
  return produce(table, newTable => {
    for (let i = 0; i < block.length; i++) {
      for (let j = 0; j < block[i].length; j++) {
        if (!block[i][j]) continue
        newTable[i + location[0]][j + location[1]] = block[i][j]
      }
    }
  })
}

export const removeBlock = (table, location, block) => {
  return produce(table, newTable => {
    for (let i = 0; i < block.length; i++) {
      for (let j = 0; j < block[i].length; j++) {
        if (!block[i][j]) continue
        newTable[i + location[0]][j + location[1]] = 0
      }
    }
  })
}

//이동 위치에 다른 블럭이 있는지 확인
export const checkTable = (table, location, block) => {
  for (let i = 0; i < block.length; i++) {
    for (let j = 0; j < block[i].length; j++) {
      if (!block[i][j]) continue
      if (table[i + location[0]][j + location[1]]) return false
    }
  }
  return true
}

export const moveLeft = state => {
  if (state.location[1] <= 0) return state
  const removedBlock = removeBlock(state.table, state.location, state.nowBlock)
  const movedLocation = produce(state.location, location => {
    location[1]--
  })
  if (!checkTable(removedBlock, movedLocation, state.nowBlock)) return state
  const movedTable = drawBlock(removedBlock, movedLocation, state.nowBlock)
  return {
    ...state,
    location: movedLocation,
    table: movedTable
  }
}

export const moveRight = state => {
  if (state.location[1] >= 10 - state.nowBlock[0].length) return state
  const removedBlock = removeBlock(state.table, state.location, state.nowBlock)
  const movedLocation = produce(state.location, location => {
    location[1]++
  })
  if (!checkTable(removedBlock, movedLocation, state.nowBlock)) return state
  const movedTable = drawBlock(removedBlock, movedLocation, state.nowBlock)
  return {
    ...state,
    location: movedLocation,
    table: movedTable
  }
}

export const moveDown = state => {
  if (state.location[0] === 20 - state.nowBlock.length) return nextBlock(state)
  const removedBlock = removeBlock(state.table, state.location, state.nowBlock)
  const movedLocation = produce(state.location, location => {
    location[0]++
  })
  if (!checkTable(removedBlock, movedLocation, state.nowBlock))
    return nextBlock(state)
  const movedTable = drawBlock(removedBlock, movedLocation, state.nowBlock)
  return {
    ...state,
    location: movedLocation,
    table: movedTable
  }
}

export const moveEnd = state => {
  if (state.location[0] >= 20 - state.nowBlock.length) return nextBlock(state)
  const removedBlock = removeBlock(state.table, state.location, state.nowBlock)
  let count = 0
  while (
    state.location[0] + count !== 20 - state.nowBlock.length &&
    checkTable(
      removedBlock,
      [state.location[0] + count + 1, state.location[1]],
      state.nowBlock
    )
  ) {
    count++
  }
  const movedLocation = produce(state.location, location => {
    location[0] += count
  })
  const movedTable = drawBlock(removedBlock, movedLocation, state.nowBlock)
  return nextBlock({
    ...state,
    location: movedLocation,
    table: movedTable
  })
}

export const rotate = state => {
  const block = state.nowBlock
  //회전
  if (
    state.location[1] + block.length > 10 ||
    state.location[0] + block[0].length > 20
  )
    return state
  const rotatedBlock = []
  for (let j = 0; j < block[0].length; j++) {
    const newLine = []
    for (let i = block.length - 1; i >= 0; i--) {
      newLine.push(block[i][j])
    }
    rotatedBlock.push(newLine)
  }
  //회전한 블록이 충돌은 없는지 확인한다.
  const removedBlock = removeBlock(state.table, state.location, block)
  if (!checkTable(removedBlock, state.location, rotatedBlock)) return state
  //충돌이 없다면 회전한 블록을 적용해서 그린다.
  const rotatedTable = drawBlock(removedBlock, state.location, rotatedBlock)
  return {
    ...state,
    nowBlock: rotatedBlock,
    table: rotatedTable
  }
}

export const nextBlock = state => {
  state = lineClear(state)
  const nowBlock = state.nextBlock
  const nextBlock = getRandomBlock()
  const location = [0, Math.floor((10 - nowBlock[0].length) / 2)]
  const table = drawBlock(state.table, location, nowBlock)
  if(!checkTable(state.table, location, nowBlock)){
    return endGame({
      ...state,
      nowBlock,
      nextBlock,
      location,
      table
    })
  }
  return {
    ...state,
    nowBlock,
    nextBlock,
    location,
    table
  }
}

export const lineClear = state => {
  const scoreList = [0, 100, 300, 500, 800]
  const newTable = state.table.filter(array => {
    let check = false
    array.forEach(x => {
      if (x === 0) check = true
    })
    return check
  })
  const clearLine = 20 - newTable.length
  const score = state.score + scoreList[clearLine]
  const level = Math.floor(score / 1000) + 1
  for (let i = 0; i < clearLine; i++)
    newTable.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  return {
    ...state,
    table: newTable,
    score,
    level
  }
}

export const start = state => {
  const nowBlock = getRandomBlock()
  const nextBlock = getRandomBlock()
  const location = [0, Math.floor((10 - nowBlock[0].length) / 2)]
  const table = drawBlock(initTable(), location, nowBlock)
  return {
    ...state,
    nowBlock,
    nextBlock,
    location,
    table,
    isRunning: true
  }
}

export const endGame = state => {
  const table = produce(state.table, table => {
    for(let i = 0; i < table.length; i++){
      for(let j = 0; j < table[i].length; j++){
        if(table[i][j] > 0) table[i][j] = 8 
      }
    }
  })
  return({
    ...state,
    table,
    isRunning: false
  })
}