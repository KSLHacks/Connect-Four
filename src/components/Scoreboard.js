import React from 'react'

const getScoreboard = (winner, scorePlayer1, scorePlayer2, currentPlayer) => {
  if(currentPlayer === 'player1') {
    return(
      <div className='scoreboard'>
        <div className='active-player'>
          &rarr;
        </div>
        <div>
          Player1: {scorePlayer1} - Player2: {scorePlayer2}
        </div>
        <div>
          &larr;
        </div>
      </div>
    )
  }

  return(
    <div className='scoreboard'>
      <div>
        &rarr;
      </div>
      <div>
        Player1: {scorePlayer1} - Player2: {scorePlayer2}
      </div>
      <div className='active-player'>
        &larr;
      </div>
    </div>
  )
}

/**
 * Displays score of the users
 */
class Scoreboard extends React.Component {
  render () {
    const { winner, scorePlayer1, scorePlayer2, currentPlayer } = this.props
    return (
      <div className='center'>
        {getScoreboard(winner, scorePlayer1, scorePlayer2, currentPlayer)}
        <h3>
          Winner: {winner}
        </h3>
      </div>
    )
  }
}

export default Scoreboard
