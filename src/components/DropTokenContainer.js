import { connect } from 'react-redux'
import { tokenDrop } from '../actions'
import DropToken from './DropToken'

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.currentPlayer,
    isBoardEnabled: state.gameInProgress
  }
}

const mapDispatchToProps = (dispatch) => ({
  tokenDropDispatch: (player, column, boardEnabled) => () => {
    if (boardEnabled) {
      dispatch(tokenDrop(player, column))
    }
  }
})

const DropTokenContainer = connect(mapStateToProps, mapDispatchToProps)(DropToken)

export default DropTokenContainer
