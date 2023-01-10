//import React, { Component } from 'react' extends 없으므로 Component 안가져와도 됨
import Square from './Square'
import "./Board.css"


//각각의 sqaure는 X or O or null이어야 함 초기값 할당
//Array.prototype.fill() 배열의 시작인덱스부터 끝까지 정적인 값 하나로 채움

//export default class Board extends Component { 클래스형
const Board = (squares, onClick) => {
 
  //클래스 일 땐 constructor  피룡
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     squares: Array(9).fill(null)
  //   }
  // }
  // hooks 사용시 (uses - snippet 사용시)
  // useState를 사용하여 hooks 가져오기
  // const[getter변수, setter변수] useState[초기값]
  //const [squares, setSquares] = useState(Array(9).fill(null));
  //snippet
  //const [xIsNext, setXIsNext] = useState(true)
   //승리 경우의 수


  
 
  
  
  //클릭시 해당 index state value 변경후 slice()메소드로 얕은 복사된 배열은 렌더링함
  //class에서는 this.state로 가져와야하나
  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   squares[i] = 'X'
  //   this.setState({ squares: squares});
  // }

  //hooks 사용시 getter 사용하여 state 가져오면 됨
  // const handleClick = (i) => {
  //   const newSquares = squares.slice();
    //newSquare[i]의 의미는 null이 아닌 이미 클릭이 되어 i에 대한 값이 할당 된 것을 의미
    // if(calculateWinner(newSquares) || newSquares[i]){
    //   return;
    // }
    // newSquares[i] = xIsNext ? 'X' : 'O';
    // setSquares(newSquares);
    // 차이점
    //setXIsNext(prev => !prev); or
  //   setXIsNext(!xIsNext);
  // }

 

  //스퀘어 컴포넌트에 value값(props)&handleClick()을 할당 함
  // class 문법
  // renderSquare(i) {
  //   return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
  // }
  //함수형
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)}/>
  }

  /* 여기서 this는 class board를 지칭 */
  //render() { 함수형에서 return 하는 render
    return (
      <div>
        
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
  }

//rafce react arrow function

export default Board
