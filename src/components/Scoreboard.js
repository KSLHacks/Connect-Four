import React from 'react'

/**
 * Displays score of the users
 */
class Scoreboard extends React.Component {
  render () {
    const { winner, scorePlayer1, scorePlayer2 } = this.props
    return (
      <div>
        <h2>
          Winner: {winner}
        </h2>
        <h1>
          Scoreboard:
          <ul>
            Player1: {scorePlayer1}
          </ul>
          <ul>
            Player2: {scorePlayer2}
          </ul>
        </h1>
      </div>
    )
  }
}

export default Scoreboard
