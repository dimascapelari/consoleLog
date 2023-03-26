//---------------------------------------------

//---------------------------------------------
let x = {
  y: "z",
  print: () => {
    return this.y === "z";
  },
};
console.log(x.print());
//Resposta: false. A função de seta (() => {...}) não cria um novo contexto de this e, portanto, o valor de this dentro da função é o mesmo que fora dela.
//---------------------------------------------
let x = {
  y: "z",
  print: function () {
    return this.y === "z";
  },
};
console.log(x.print());
//Resposta: true. Função regular em vez de uma função de seta

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
