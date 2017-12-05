import React from 'react'

/**
 * 1x7 column
 */
class App extends React.Component {
  render () {
    const { currentPlayer, slotOwner, column, changePlayerDispatch } = this.props
    return (
      <div className='column-grid'>
        <button className={slotOwner[column][6]} onClick={changePlayerDispatch(currentPlayer, column)}>
          {column}:6 { slotOwner[column][6] }
        </button>
        <button className={slotOwner[column][5]} onClick={changePlayerDispatch(currentPlayer, column)}>
          {column}:5 { slotOwner[column][5] }
        </button>
        <button className={slotOwner[column][4]} onClick={changePlayerDispatch(currentPlayer, column)}>
          {column}:4 { slotOwner[column][4] }
        </button>
        <button className={slotOwner[column][3]} onClick={changePlayerDispatch(currentPlayer, column)}>
          {column}:3 { slotOwner[column][3] }
        </button>
        <button className={slotOwner[column][2]} onClick={changePlayerDispatch(currentPlayer, column)}>
          {column}:2 { slotOwner[column][2] }
        </button>
        <button className={slotOwner[column][1]} onClick={changePlayerDispatch(currentPlayer, column)}>
          {column}:1 { slotOwner[column][1] }
        </button>
        <button className={slotOwner[column][0]} onClick={changePlayerDispatch(currentPlayer, column)}>
          {column}:0 { slotOwner[column][0] }
        </button>
      </div>
    )
  }
}

export default App
