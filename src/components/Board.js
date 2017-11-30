import React from 'react'
import Column from './Column'

/**
 * Connect Four board 6x7 grid. (6 columns)
 */
class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <Column name='column a' />
        <Column name='column b' />
        <Column name='column c' />
        <Column name='column d' />
        <Column name='column e' />
        <Column name='column f' />
      </div>
    )
  }
}

export default Board
