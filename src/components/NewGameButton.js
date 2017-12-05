import React from 'react'

const getButton = (isVisible, newGameDispatch) => {
  if (isVisible) {
    return (
      <button onClick={newGameDispatch}>
        New Game
      </button>
    )
  }

  return ''
}

/**
 * Displays a 'New Game' button to reset board
 */
class NewGameButton extends React.Component {
  render () {
    const { isVisible, newGameDispatch } = this.props
    return (
      getButton(isVisible, newGameDispatch)
    )
  }
}

export default NewGameButton
