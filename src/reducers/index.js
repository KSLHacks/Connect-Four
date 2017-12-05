import { combineReducers } from 'redux'
import playerReducer from './currentPlayer'
import boardReducer from './board'
import scoreReducer from './score'
import winnerReducer from './winner'
import gameInProgressReducer from './gameInProgress'
import turnsReducer from './turns'

const rootReducer = combineReducers({
  currentPlayer: playerReducer,
  board: boardReducer,
  score: scoreReducer,
  winner: winnerReducer,
  gameInProgress: gameInProgressReducer,
  turns: turnsReducer
})

export default rootReducer
