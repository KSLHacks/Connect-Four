const defaultBoardState = {
  col1: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  col2: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  col3: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  col4: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  col5: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  col6: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
}

const board = (prevState = defaultBoardState, action) => {
  // Action conditional
  if (action.type === 'TOKEN_DROP') {
    // Update column with token drop
    const activeColumn = prevState[action.column]

    let emptyIndex = activeColumn.findIndex((item) => {
      if (item === 'empty') {
        return item
      }
    })

    // update space with current player
    var newState = { ...prevState }
    newState[action.column][emptyIndex] = action.player

    return {
      ...newState
    }
  }

  return prevState
}

export default board
