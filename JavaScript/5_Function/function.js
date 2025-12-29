// function fun() {
//  console.log("Hello")
// }
// // fun();

// function add(a, b) {
//  return a + b;
// }

// // let sum = add(3,4)
// // console.log(sum)

// console.log(add(3,4))

// function mul(a, b, c) {
//  return a*b*c
// }
// console.log(mul(2, 4, 5))

// // function sayHello(name) {
// //  return "Hello " + name
// // }
// // console.log(sayHello("Akhila"))


// let sayHello = function(name) {
//  return "Hello " + name
// }
// console.log(sayHello("Akhila"))



function Print() {
 console.log("Warangal");
}

Print();

// Function defination
function addTwo(nums1, nums2) {
 console.log(nums1+ nums2);
}

// Function calling
addTwo(4, 5)


function addTwo(nums1, nums2) {
 return nums1+ nums2;
}

// Function calling
console.log(addTwo(5, 5))


let add = function addTwo(nums1, nums2) {
 return nums1+ nums2;
}

// Function calling
// console.log(add(6, 5))



let adds = function(nums1, nums2) {
 return nums1+ nums2;
}

// Function calling
// console.log(add(6, 5))


// arrow function
// let sub = (nums1, nums2) => {
//  return nums1 - nums2;
// }

let sub = (nums1, nums2) => nums1 - nums2;

console.log(sub(5,4));


// let print = () => {
//  console.log("Sameer")
// }
// print()

let print = () => "Sameer"
console.log(print())


function outer() {
 // console.log("Bindu")
 function inner() {
  console.log("Rafeeq")
 }
 inner();
}
outer();


function outer() {
 function inner() {
  // console.log("Rafeeq")
  return "Rafeeq"
 }
 return inner();
}
console.log(outer())



function plus(nums1, nums2) {
 return nums1+nums2;
}

function minus(nums1, nums2) {
 return nums1 - nums2;
}

function merge() {
 console.log(plus(4,3));
 console.log(minus(4,3));
}
merge()

