function checkWinningConditions (board, player) {
  const targetString = player + player + player + player

  const isWinning = (container) => (key) => {
    const line = container[key]
    const arrayString = line.join('')
    return (arrayString.search(targetString) > -1)
  }

  // vertical check
  const columnKeys = Object.keys(board)
  const isVerticalWinner = columnKeys.some(isWinning(board))

  // horizontal check
  const rows = {
    row1: [board.col1[0], board.col2[0], board.col3[0], board.col4[0], board.col5[0], board.col6[0]],
    row2: [board.col1[1], board.col2[1], board.col3[1], board.col4[1], board.col5[1], board.col6[1]],
    row3: [board.col1[2], board.col2[2], board.col3[2], board.col4[2], board.col5[2], board.col6[2]],
    row4: [board.col1[3], board.col2[3], board.col3[3], board.col4[3], board.col5[3], board.col6[3]],
    row5: [board.col1[4], board.col2[4], board.col3[4], board.col4[4], board.col5[4], board.col6[4]],
    row6: [board.col1[5], board.col2[5], board.col3[5], board.col4[5], board.col5[5], board.col6[5]],
    row7: [board.col1[6], board.col2[6], board.col3[6], board.col4[6], board.col5[6], board.col6[6]]
  }

  const rowKeys = Object.keys(rows)
  const isHorizontalWinner = rowKeys.some(isWinning(rows))

  // diagonal check
  const diagonal = {
    diag1: [board.col1[3], board.col2[4], board.col3[5], board.col4[6]],
    diag2: [board.col1[2], board.col2[3], board.col3[4], board.col4[5], board.col5[6]],
    diag3: [board.col1[1], board.col2[2], board.col3[3], board.col4[4], board.col5[5], board.col6[6]],
    diag4: [board.col1[0], board.col2[1], board.col3[2], board.col4[3], board.col5[4], board.col6[5]],
    diag5: [board.col2[0], board.col3[1], board.col4[2], board.col5[3], board.col6[4]],
    diag6: [board.col3[0], board.col4[1], board.col5[2], board.col6[3]],
    diag7: [board.col1[3], board.col2[2], board.col3[1], board.col4[0]],
    diag8: [board.col1[4], board.col2[3], board.col3[2], board.col4[1], board.col5[0]],
    diag9: [board.col1[5], board.col2[4], board.col3[3], board.col4[2], board.col5[1], board.col6[0]],
    diag10: [board.col1[6], board.col2[5], board.col3[4], board.col4[3], board.col5[2], board.col6[1]],
    diag11: [board.col2[0], board.col3[1], board.col4[2], board.col5[3], board.col6[4]],
    diag12: [board.col3[6], board.col4[5], board.col5[4], board.col6[3]]
  }

  const diagKeys = Object.keys(diagonal)
  const isDiagonalWinner = diagKeys.some(isWinning(diagonal))

  return (isVerticalWinner || isHorizontalWinner || isDiagonalWinner)
}

export const tokenDrop = (player, column) => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOKEN_DROP', player, column })

    // Check for winning condition
    const { board, turns } = getState()
    if (checkWinningConditions(board, player)) {
      dispatch({ type: 'UPDATE_WINNER', player })
    }

    // Check for tie condition
    if (turns === 42) {
      dispatch({ type: 'UPDATE_TIE' })
    }
  }
}

export const newGame = () => {
  return { type: 'NEW_GAME' }
}
