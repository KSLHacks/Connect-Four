const defaultGameInProgressStage = true

const gameInProgress = (prevState = defaultGameInProgressStage, action) => {
  // Action conditional
  if (action.type === 'UPDATE_WINNER') {
    return false
  }

  if (action.type === 'UPDATE_TIE') {
    return false
  }

  if (action.type === 'NEW_GAME') {
    return true
  }

  return prevState
}

export default gameInProgress
