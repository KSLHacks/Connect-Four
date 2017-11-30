import React from 'react'

/**
 * 1x7 column
 */
class App extends React.Component {
  constructor () {
    super()
    this.OwnerEnum = {
      empty: 'empty',
      player1: 'player 1',
      player2: 'player 2'
    }
    this.state = {
      owner: this.OwnerEnum.empty
    }
    this.onClick = () => {
      // empty -> player1
      if (this.state.owner === this.OwnerEnum.empty) {
        this.setState({
          owner: this.OwnerEnum.player1
        })
      }
      // player1 -> player2
      if (this.state.owner === this.OwnerEnum.player1) {
        this.setState({
          owner: this.OwnerEnum.player2
        })
      }
      // player2 -> empty
      if (this.state.owner === this.OwnerEnum.player2) {
        this.setState({
          owner: this.OwnerEnum.empty
        })
      }
    }
  }
  render () {
    const {name} = this.props
    return (
      <div className='column-grid'>
        <button className='box' onClick={this.onClick}>
          {name}-1 { this.state.owner }
        </button>
        <button className='box' onClick={this.onClick}>
          {name}-2 { this.state.owner }
        </button>
        <button className='box' onClick={this.onClick}>
          {name}-3 { this.state.owner }
        </button>
        <button className='box' onClick={this.onClick}>
          {name}-4 { this.state.owner }
        </button>
        <button className='box' onClick={this.onClick}>
          {name}-5 { this.state.owner }
        </button>
        <button className='box' onClick={this.onClick}>
          {name}-6 { this.state.owner }
        </button>
        <button className='box' onClick={this.onClick}>
          {name}-7 { this.state.owner }
        </button>
      </div>
    )
  }
}

export default App
