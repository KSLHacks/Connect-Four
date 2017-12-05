import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const defaultState = {
  currentPlayer: 'player1'
}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
)

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('mount')
  )
})
