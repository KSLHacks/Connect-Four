import React from 'react'

/**
 * 1x7 column
 */
class App extends React.Component {
  render () {
    const { currentPlayer, slotOwner, column, boardEnabled, tokenDropDispatch } = this.props
    return (
      <div className='column-grid'>
        <center>
          <button className='drop-button' onClick={tokenDropDispatch(currentPlayer, column, boardEnabled)}>
            Drop
          </button>
          <div className={slotOwner[column][6]} />
          <div className={slotOwner[column][5]} />
          <div className={slotOwner[column][4]} />
          <div className={slotOwner[column][3]} />
          <div className={slotOwner[column][2]} />
          <div className={slotOwner[column][1]} />
          <div className={slotOwner[column][0]} />
        </center>
      </div>
    )
  }
}

export default App
