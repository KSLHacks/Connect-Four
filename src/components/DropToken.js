import React from 'react'

const getTokenHover = (currentPlayer, column, boardEnabled, tokenDropDispatch) => {
    if (currentPlayer === 'player1') {
        return(
          <div className='drop-blue slot' onClick={tokenDropDispatch(currentPlayer, column, boardEnabled)} />
        )
    }
    return(
      <div className='drop-red slot' onClick={tokenDropDispatch(currentPlayer, column, boardEnabled)} />
    )
}

/**
 * Simulate token hover over columns - click to drop in column
 */
class DropToken extends React.Component {
  render () {
    const { currentPlayer, column, boardEnabled, tokenDropDispatch } = this.props
    return(
      getTokenHover(currentPlayer, column, boardEnabled, tokenDropDispatch)
    )
  }
}

export default DropToken
