const defaultScoreState = {
  player1: 0,
  player2: 0
}

const score = (prevState = defaultScoreState, action) => {
  // Action conditional
  if (action.type === 'UPDATE_WINNER') {
    const newState = { ...prevState }
    newState[action.player] = newState[action.player] + 1

    return { ...newState }
  }

  return prevState
}

export default score
