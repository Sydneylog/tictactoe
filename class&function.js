class A {
  constructor() {}
}
class B extends A {
  constructor() {
    super()
  }
}
class C extends B {
  constructor() {
    super()
  }
}

const a = new A()
const b = new B()
const c = new C()

console.log(a instanceof A) //true
console.log(a instanceof B) //false
console.log(a instanceof C) //false

console.log(b instanceof A) //true
console.log(b instanceof B) //true
console.log(b instanceof C) //false

console.log(c instanceof A) //true
console.log(c instanceof B) //true
console.log(c instanceof C) //true

//.constructor
console.log(c.constructor === A) //false
console.log(c.constructor === B) //false
console.log(c.constructor === C) //true

const fruits = ['apple', 'banana']
// = const fruits = new Array ['apple', 'banana']

console.log(fruits.constructor === Array) //both of them are true
console.log(fruits instanceof Array)


//function expression & hoisting

//declaration 선언문
function hello() {}

//expression 표현식
const hello = function () {}
hello()

//차이점 -hoisting 함수 선언부가 유효범위 최상단으로 끌어올려짐

//함수 선언되기 전에 실행했음에도 hello 실행됨
helloB()
world() //error 호이스팅 불가

//선언문 형식에서는 호이스팅 가능
function helloB() {
  console.log('hello')
}
//표현식 형식에서는 호이스팅 불가 error
const world = function helloB(){
  console.log('hello')
}
world()

//함수이름을 통해 추상적으로 이해돕고 이후에 함수내부를 볼 수 있게 함 => 가독성 좋아짐 

//반환 및 종료
function popo() {
  return "hello"
  return //반환값 없으면 undefined 반환함 or 함수 내용 없어도 undefined 반환

}

console.log(popo()) //반환되는 값을 남김 return 

function plus(num) {
  if (typeof num !== "number") {
    console.log('숫자 입력 필요')
    return 0
  }
  return num + 1
}

console.log(plus(2)) //3
console.log(plus(7)) //8
console.log(plus()) //plus()는 매개변수 없어서 undefined 이나 return +1 이므로 NaN 반환함

//매개변수 패턴 (parameter pattern)
//기본값 (default value)

function sum(a, b = 1) { //매개변수 
  return a + b
}
console.log(sum(1, 2)) //argument 인수
console.log(sum(7)) //NaN default 없으므로 -> b 디폴트 할당 되었다면 8 반환

//구조분해 할당

const user = {
  name: 'teropy',
  age: 85
}
function getName(user) {
  const { name } = user //구조분해 할당 
  return name
}
function getName({ name }) { //매개변수에서의 구조분해 할당
  return name
}

// function getEmail() {
//   return user.email
// }
function getEmail({ email = '이메일 없음' }) { //매개변수에서의 구조분해 할당
  return email
}

console.log(getName(user)) // teropy
console.log(getEmail(user)) // undefined 없는 속성 디폴트 설정시 해당 스트링 반환

const fruitsA = ['apple', 'banana', 'cherry']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem(array) {
  return array[1]
}
console.log(getSecondItem(fruitsA)) //banana

// 배열 구조 분해 
function getSecondItem([, b]) { //쉼표로 두번째임을 나타냄
  return b
}
console.log(getSecondItem(fruitsA)) //banana
console.log(getSecondItem(numbers)) //2

//나머지 매개 변수 ...rest 전개연산자
function sumA(...rest) {
  console.log(rest)
  console.log(arguments) // arguments 0:1 1:2 처럼 배열 처럼 생긴 array like(유사 배열)생성 but 배열 데이터가 아니기 때문에 reduce 메소드 사용 불가 배열처럼 모든 배열 데이터를 가지긴 함 그러므로 잘 사용하지 않고 rest를 사용하여 배열데이터로 활용함
  return rest.reduce(function (acc, cur){
    return acc + cur
  }, 0) //rest는 배열 데이터이므로 배열 메소드를 사용 할 수 있음 여기선 reduce
}

console.log(sumA(1, 2)) //3 기대
console.log(sumA(1, 2, 3, 4)) //10 기대 a, b,는 지정되어 있고 나머지는 rest에 해당(3 ~ 4) 
console.log(sumA(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) //55 기대

