import React from 'react'
import Board from './Board'
import ScoreboardContainer from './ScoreboardContainer'
import NewGameButtonContainer from './NewGameButtonContainer'

/**
 * Main App React Component to render
 */
class App extends React.Component {
  render () {
    return (
      <div>
        <ScoreboardContainer />
        <NewGameButtonContainer />
        <Board />
      </div>
    )
  }
}

export default App
