console.log(!![]);
//Resposta: true
//---------------------------------------------

let variaveis = 'pessoas por aí';
const constante = 'você';
console.log(`Entre tantas ${variaveis}, eu escolho ${constante} no meu coração`);
//Resposta: Entre tantas pessoas por aí, eu escolho você no meu coração
//---------------------------------------------

console.log(null==0);
//Resposta: false
//---------------------------------------------

var a = 1
var b = 2
console.log(a+++b)
//Resposta: 3

//---------------------------------------------
console.log("4" + 5 * 5)
//Resposta: 425

//---------------------------------------------
let a = 5;
let b = 4;
let c = 3;
console.log(a > b > c)
//Resposta: false

//---------------------------------------------
console.log(true + false);
console.log(null + true);
//Resposta: 1
//Resposta: 1

//---------------------------------------------
function myFunc() {
  return "43";
}
console.log(typeof myFunc());
//Resposta: string

//---------------------------------------------
const num1 = 1_000_000_000;
const num2 = 1000000000;
console.log(num1 === num2);
//Resposta: true

//---------------------------------------------
var a = 10;
var b = 20;
a = ++a;
b = ++b;

console.log("++a = " + a);
console.log("b++ = " + b);
//Resposta: ++a = 11, b++ = 21

//---------------------------------------------
let sum = 0;

function addSum(num) {
  sum = sum + num;
}
console.log(addSum(3));
//Resposta: undefined

//---------------------------------------------
let one = 34522445
if(one === 34522445){one = 33}
console.log(one)

//Resposta: 33

//---------------------------------------------
let d = (10 + 5) * "2"
console.log(d)
//Resposta: 30

//---------------------------------------------
let x = 1;

function add() {
  let x = 2;
  return x + y;
}

let y = 3;
console.log(add());
//Resposta: 5

//---------------------------------------------
const people = { name: "John", age: 30 };
console.log(Object.entries(people));
//Resposta: [ [ 'name', 'John' ], [ 'age', 30 ] ]

//---------------------------------------------
console.log(1);
const data = new Promise((resolve) => {
  console.log(2);
  resolve(3);
});
data.then((res) => console.log(res));
console.log(4);
//Resposta: 1, 2, 4, 3

//---------------------------------------------
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
//Resposta: [ { name: 'Lydia' } ]

//---------------------------------------------
let a = 3
console.log(a++)
//Resposta: 3

//---------------------------------------------
let number = 0
console.log(number++)
console.log(++number)
console.log(number)
//Resposta: 0 2 2

//---------------------------------------------

const y = {name: 'React Js'}
const b = y
b.name = 'JavaScript'
console.log(y.name)
//Resposta: JavaScript 

//---------------------------------------------
let a = 20;
{
  console.log(a);
}
a = 40;
//Resposta: 20

//---------------------------------------------
let x = 5;
console.log(x++);
console.log(++x);
//Resposta: 5, 7

//---------------------------------------------
console.log(1 + "2" + 3)
//Resposta: 123

//---------------------------------------------
var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = -20;
}
console.log(b);
//Resposta: -10

//---------------------------------------------

let x = 10;

{
let x = 20;
}

console.log(x != 20) 
x = 30
//Resposta: true

//---------------------------------------------
let x = 10
console.log(x++ + ++x)
//Resposta: 22

//---------------------------------------------
console.log("2" + 2 - "1")
//Resposta: 21

//---------------------------------------------
const arr = [1, 2, 3];
const newArr = arr.map(function (num) {
  return num * 2;
});
console.log(newArr);
//Resposta: [2, 4, 6]

//---------------------------------------------
const min = 100;
const max = 200;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
//Resposta: imprime um número aleatório entre 100 e 200

//---------------------------------------------
let c = "FooBar";
let b = String("FooBar");
let e = c===b
console.log(e)
//Resposta: true

//---------------------------------------------
let y = (1,2,3)
console.log(y)
//Resposta: 3

//---------------------------------------------
let array = ['preto', 10, 20, 30]
array.pop()
console.log(array)
//Resposta: ['preto', 10, 20]

//---------------------------------------------
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello"), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("World"), 1000);
});
Promise.all([promise1, promise2]).then((values) => console.log(values));
//Resposta: [ 'Hello', 'World' ]

//---------------------------------------------
function parameter(para = 10) {
  console.log(para);
}
parameter(null);
//Resposta: null

//---------------------------------------------
const a = 3 > 2 > 1;
console.log(a);
//Resposta: false

//---------------------------------------------
let test = 0;
for (test; test < 5; test++);
console.log(test);
//Resposta: 5

//---------------------------------------------
function teste(){
setTimeout(() => console.log(1),2000);
console.log(2);
setTimeout(() => console.log(3),0);
console.log(4);
}
teste()

//Resposta: 2 4 3 1

//---------------------------------------------
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
//Resposta: 1

//---------------------------------------------
function foo() {
  let x = 1;
  function bar() {
    console.log(x);
  }
  x = 2;
  return bar;
}

let y = foo();
let x = 3;
y();
//Resposta: 2

//---------------------------------------------
const fruits = ["apple", "banana", "orange"];
console.log(fruits.length);
//Resposta: 3

//---------------------------------------------
let decimal = 7.6;
let getInt = Math.floor(decimal);
console.log(getInt);
//Resposta: 7 -> O método Math.floor() em JavaScript arredonda um número PARA BAIXO para o inteiro mais próximo.

//---------------------------------------------
const original = { name: "MDN" };
original.itself = original;
const clone = structuredClone(original);

console.log(clone !== original); //Resposta: true
console.log(clone.name === "MDN"); //Resposta: true
console.log(clone.itself === clone); //Resposta: true

//---------------------------------------------
let x = {
  y: "z",
  print: () => {
    return this.y === "z";
  },
};
console.log(x.print());
//Resposta: false

A resposta é falsa porque o valor de this.y 
dentro do método print não se refere à propriedade 
y do objeto x. Isso ocorre porque a função 
de seta (() => {...}) não cria um novo contexto 
de this e, portanto, o valor de this dentro da 
função é o mesmo que fora dela.

Quando o método print é chamado através de 
x.print(), o valor de this é o objeto global 
(no navegador, o objeto window, e no Node.js, 
o objeto global). Como o objeto global não tem 
uma propriedade y definida, a expressão 
this.y === "z" retorna false.

//---------------------------------------------
Para corrigir isso, podemos usar uma função 
regular em vez de uma função de seta para definir 
o método print e usar a sintaxe objeto.método() 
para chamar o método em vez de função(). 
Ficaria assim:

let x = {
  y: "z",
  print: function () {
    return this.y === "z";
  },
};
console.log(x.print());
//Resposta: true

//---------------------------------------------
console.log([1, 2, 3] == [1, 2, 3]);
//Resposta: false

//---------------------------------------------
(function () {
  var a = (b = 5);
})();
console.log(b);
// Resposta: 5

//---------------------------------------------
console.log(2 ** 5);
//Resposta: 32

//---------------------------------------------
let js = 10;
js*= 5;
console.log(js)

//Resposta: 50

//---------------------------------------------
let quiz = [1, 2, 3];
let js = [6, 7, 8];
console.log(quiz.concat(js));
// Resposta: [ 1, 2, 3, 6, 7, 8 ]

//---------------------------------------------
let array = ['preto', 10, 20, 30]
array.push('novo elemento') 
console.log(array)

//Resposta: ['preto', 10, 20, 30, 'novo elemento']

//---------------------------------------------
var x = 12;
(() => {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();
//Resposta: 1, 4, 3, 2

//---------------------------------------------
let array = ['preto', 10, 'azul']
console.log(array.join('-'))
	
//Resposta: preto-10-azul

//---------------------------------------------
let array = ['preto', 10, 20, 30]
array.shift()
console.log(array);

//Resposta: [10, 20, 30]

//---------------------------------------------
let array1 = ['preto', 10, null]
let array2 = ['verde', 40, undefined]
let array3 = array1.concat(array2)
console.log(array3)
//Resposta: ['preto', 10, null, 'verde', 40, undefined]

//---------------------------------------------
const ref = "name"
const obj = {name: "Virat"}
const obj2 = {...obj, ref: "Kohli"}
console.log(obj2)
//Resposta: {"name": "Virat", "ref": "Kohli"}

//---------------------------------------------
for (var i = 0; i < 3; i++) { setTimeout(function log() { console.log(i); // What is logged?
}, 1000);
}
//Resposta: 3,3,3

//---------------------------------------------
console.log(false ?? true);
//Resposta: false

//---------------------------------------------
for (var i = 0; i < 5; i++) {
console.log(i);
}
//Resposta: 0,1,2,3,4

//---------------------------------------------
console.log(1 + 2 + "2")
//Resposta: 32

//---------------------------------------------
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = console;
c.log(a == b);
c.log(a === b);
c.log(a === [1, 2, 3]);
c.log(a == [1, 2, 3]);
//Resposta: false, false, false, false

//---------------------------------------------
console.log(-true)
//Resposta: -1

//---------------------------------------------
var x = 12;
var y = 8;
var res = eval("x+y");
console.log(res);
//Resposta: 20

//---------------------------------------------
var fun = function () {
  console.log(x);
  var x = 20;
};
fun();
//Resposta undefined

//---------------------------------------------
let arr = [1, 2, 3];
arr.push(4);
arr.pop(); 
arr.unshift(0);
console.log(arr.length);
//Resposta: 4

//---------------------------------------------
let a = [3,4,1e3,0xff]
maxA = Math.max(...a),
maxB = Math.max.apply(null,a)
console.log(maxA === maxB)
//Resposta: true

//---------------------------------------------
console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof(NaN))
//Resppsta: object, undefined, number

//---------------------------------------------
let a = "3"
+a--
console.log(a)
//Resposta: SyntaxError

//---------------------------------------------
let nums = [1, 2, 3, 4, 5];
let updated = nums.splice(2, 2, 2);
console.log(nums, updated);
// Resposta: [ 1, 2, 2, 5 ] [ 3, 4 ]

//---------------------------------------------
console.log(NaN === NaN)
// Resposta: false

//---------------------------------------------
(function(){
	var a = b = 5
})()
console.log(b)
//Resposta: 5

//---------------------------------------------
for (var i = 1; i <= 5; i++){
	setTimeout(function(){
		console.log(i)
	},1000 *i);
}
//Resposta: 66666

//---------------------------------------------
(function () {
  var a = (b = 5);
})();

console.log(b);
console.log(a);
//Resposta: 5, error

//---------------------------------------------
let a = 1,
  b = 2,
  c = 3;
let result = (a++, b++, c++, a + b + c);
console.log(result);
//Resposta: 9

//---------------------------------------------
let x = 1
const y = 2

if(true){
	let x = 3
	const y = 4
	console.log(x,y)
}
console.log(x,y)
//Resposta: 3412

//---------------------------------------------
var z = 254;
z = 283;
console.log(z)
//Resposta: 283 

//---------------------------------------------
var x = "1" + 2 + 3;
console.log(x);
//Resposta: "123"

//---------------------------------------------
console.log(0.1 + 0.2 === 0.3);
//Resposta: false

//---------------------------------------------
const arr = [1, 2, 3, [4, 5, 6, [7, 5, 4]]];
console.log(arr.flat(0));
//Resposta: [ 1, 2, 3, [ 4, 5, 6, [ 7, 5, 4 ] ] ]

//---------------------------------------------
