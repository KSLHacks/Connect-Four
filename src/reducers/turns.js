const defaultTurnsState = 0

const turns = (prevState = defaultTurnsState, action) => {
  if (action.type === 'TOKEN_DROP') {
    return prevState + 1
  }

  if (action.type === 'NEW_GAME') {
    return 0
  }

  return prevState
}

export default turns
