const defaultWinnerState = 'None'

const winner = (prevState = defaultWinnerState, action) => {
  // Action conditional
  if (action.type === 'UPDATE_WINNER') {
    return action.player
  }

  if (action.type === 'UPDATE_TIE') {
    return 'Tie'
  }

  return prevState
}

export default winner
