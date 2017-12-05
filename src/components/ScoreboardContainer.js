import { connect } from 'react-redux'
import Scoreboard from './Scoreboard'

const mapStateToProps = (state) => {
  return {
    winner: state.winner,
    scorePlayer1: state.score.player1,
    scorePlayer2: state.score.player2
  }
}

const ColumnContainer = connect(mapStateToProps)(Scoreboard)

export default ColumnContainer
