import { connect } from 'react-redux'
import NewGameButton from './NewGameButton'
import { newGame } from '../actions'

const mapStateToProps = (state) => {
  return {
    isVisible: !state.gameInProgress
  }
}

const mapDispatchToProps = (dispatch) => ({
  newGameDispatch: () => {
    dispatch(newGame())
  }
})

const NewGameButtonContainer = connect(mapStateToProps, mapDispatchToProps)(NewGameButton)

export default NewGameButtonContainer
