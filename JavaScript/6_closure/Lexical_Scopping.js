// Lexical Scoping
// let y = 1;
// function hel() {
//  console.log(y);
// }
// hel();

function outer() {
 let x = 1;
 function inner() {
  x++;
  console.log(x);
 }
 // inner();
}
// outer();





function outer() {
 var x = 4;
 function inner() {
  x++;
  console.log(x);
 }
 return inner;
}

// outer()
// outer()
// outer()
let f = outer();
f();
// f();
// f();