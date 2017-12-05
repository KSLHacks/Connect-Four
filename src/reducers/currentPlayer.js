const currentPlayer = (prevState = 'player1', action) => {
  // Action conditional
  if (action.type === 'TOKEN_DROP') {
    if (prevState === 'player1') {
      return 'player2'
    }

    return 'player1'
  }

  return prevState
}

export default currentPlayer
