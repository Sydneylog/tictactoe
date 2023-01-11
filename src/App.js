import { useState } from 'react';
import "./App.css"
import Board from "./components/Board";


function App() {
  //history가 배열이므로 대괄호 사용
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0); //초기값 0 할당
  //console.log('히스토리배열:', history);
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
      }
    return null;
  }

  //newHistory는 올바르지 않은 미래의 기록을 초기화 하는 것임
  const current = history[stepNumber];
  //현재상태의 squares 배열 state를 주어야 함 current의 square 지정
  const winner = calculateWinner(current.squares); 
 

  let status;
  if(winner) { 
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length -1]
    const newSquares = newCurrent.squares.slice();
    if(calculateWinner(newSquares) || newSquares[i]) {
      return
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, {squares: newSquares}]);
    setXIsNext(!xIsNext);
    //setXIsNext(current => !current);
    
    setStepNumber(newHistory.length)
  }

  //여기서 move는 index 역할 step은 history의 item
  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';
    return (
      <li key = { move } >
        <button onClick = {() => JumpTo(move)} class="move-button">
          { desc }
        </button>
      </li>
    )
  })

  const JumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0); //해당 순번에서 true or false가 결정되어야 o 또는 X의 순서가 정해지기 때문
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{ status }</div>
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}

export default App;
