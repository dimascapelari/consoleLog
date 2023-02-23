//---------------------------------------------

(function () {
  var a = (b = 5);
})();

console.log(b);
console.log(a);
//Resposta: 5, error 

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
