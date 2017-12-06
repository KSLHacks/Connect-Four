import React from 'react'

const getTokenHover = (currentPlayer, column, isBoardEnabled, tokenDropDispatch) => {
    if (currentPlayer === 'player1') {
        return(
          <div className='drop-blue slot' onClick={tokenDropDispatch(currentPlayer, column, isBoardEnabled)} />
        )
    }
    return(
      <div className='drop-red slot' onClick={tokenDropDispatch(currentPlayer, column, isBoardEnabled)} />
    )
}

/**
 * Simulate token hover over columns - click to drop in column
 */
class DropToken extends React.Component {
  render () {
    const { currentPlayer, column, isBoardEnabled, tokenDropDispatch } = this.props
    return(
      getTokenHover(currentPlayer, column, isBoardEnabled, tokenDropDispatch)
    )
  }
}

export default DropToken
