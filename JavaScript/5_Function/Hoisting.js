// Hoisting

// function calling
// sayHello("Swati");

// // Defining function
// function sayHello(name) {
//  console.log("Hello", name)
// }



var x;
function print() {
 console.log(x)
 x = 2;
 console.log(x);
 x++;
 console.log(x)
 x++;
}
print();
console.log(x);

