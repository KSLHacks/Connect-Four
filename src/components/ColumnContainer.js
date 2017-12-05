import { connect } from 'react-redux'
import { tokenDrop } from '../actions/index'
import Column from './Column'

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.currentPlayer,
    slotOwner: state.board,
    winner: state.board.winner
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePlayerDispatch: (player, column) => () => {
    dispatch(tokenDrop(player, column))
  }
})

const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column)

export default ColumnContainer
