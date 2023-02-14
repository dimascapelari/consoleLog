/*
console.log(0.1 + 0.2 === 0.3);
//Resposta: false
*/

const arr = [1, 2, 3, [4, 5, 6, [7, 5, 4]]];
console.log(arr.flat(0));
//Resposta: [ 1, 2, 3, [ 4, 5, 6, [ 7, 5, 4 ] ] ]
