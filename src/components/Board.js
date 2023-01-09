import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

  renderSquare(i) {
    return <Square />
  }

  render() {
    return (
      <div>
        <div className='status'>Next Player: x, O</div>
        <div className='board-row'>
          {/* 여기서 this는 class board를 지칭하고 */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

