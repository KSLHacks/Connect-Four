import React from 'react'
import ColumnContainer from './ColumnContainer'

/**
 * Connect Four board 6x7 grid. (6 columns)
 */
class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <ColumnContainer column='col1' />
        <ColumnContainer column='col2' />
        <ColumnContainer column='col3' />
        <ColumnContainer column='col4' />
        <ColumnContainer column='col5' />
        <ColumnContainer column='col6' />
      </div>
    )
  }
}

export default Board
