import { combineReducers } from 'redux'
import playerReducer from './currentPlayer'
import boardReducer from './board'

const rootReducer = combineReducers({
  currentPlayer: playerReducer,
  board: boardReducer
})

export default rootReducer
