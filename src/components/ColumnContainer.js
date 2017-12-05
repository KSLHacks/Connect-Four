import { connect } from 'react-redux'
import { tokenDrop } from '../actions'
import Column from './Column'

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.currentPlayer,
    slotOwner: state.board,
    winner: state.board.winner,
    boardEnabled: state.gameInProgress,
    turns: state.turns
  }
}

const mapDispatchToProps = (dispatch) => ({
  tokenDropDispatch: (player, column, boardEnabled) => () => {
    if (boardEnabled) {
      dispatch(tokenDrop(player, column))
    }
  }
})

const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column)

export default ColumnContainer
