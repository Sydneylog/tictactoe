import React from "react";
import "./Square.css"

//export default class Square extends React.Component { 클래스형
//함수형1
//const Square = (props) => {
//함수형2 - destructuring
const Square = ({onClick, value}) => {

  //부모인 board.js에 state값이 할당되어 있으므로 자식인 square.js에서 state value:null 을 정의할 필요가 없어졌음 즉, Square는 게임의 상태를 유지할 피룡가 없기 때문에 constructor를 통한 state가 필요 없어졌음
  //대신 부모인 board.js에서 state값을 props로 받아와야하고
  //부모인 board.js에서는 props로 값을 내려주어야 함
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   }
  // }
  
//square의 값은 X or O or null 이어야 함
  //render() {
  // return (
  //   <button className="square" 
  //     onClick={() => { this.props.onClick() }}>
  //     {this.props.value}      
  //   </button>
  // )
  //함수형1
  // return (
  //   <button className="square" 
  //     onClick={() => { props.onClick() }}>
  //     {props.value}      
  //   </button>
  // )
  //함수형2 - destructuring
  return (
    <button className="square" 
      onClick={onClick}>
      {value}      
    </button>
  )
}

export default Square

