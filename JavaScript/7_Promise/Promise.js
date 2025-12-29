// let first = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//   console.log("Hello, Promises is resolved!!");
//   // resolve();
//  }, 2000)
//  resolve();
// })

// first
// .then(function() {
//  console.log("we are using resolve");
// })


// new Promise(function(resolve, reject) {
//  setTimeout(function() {
//   console.log("Hello, Promises is resolved!!");
//   // resolve();
//  }, 2000)
//  resolve();
// })
// .then(() => {
//  console.log("we are using resolve");
// })



// // Promise chaining
// let Sravani = new Promise(function(resolve, reject) {
//  setTimeout(() => {
//   resolve({studenName: "Sravani", favouriteFood: "Fried Rice"});
//  }, 2000)
// })

// Sravani
// .then((data) => {
//  console.log(data);
//  console.log("we are using resolve - 3");
//  return data.studenName;
// })
// .then((samerr) => {
//  console.log(samerr);
// });


// const Resutaurant = new Promise(function(resolve, reject) {
//  const biryani = true;
//  if(biryani) {
//   resolve("Yes today i will eat yummy biryani");
//  }else {
//   reject("😞, i want biryani!!!");
//  }
// })
// Resutaurant
// .then((data) => {
//  console.log(data);
// })
// .catch((err) => {
//  console.log(err);
// })



fetch('https://api.github.com/users/Mohammed-Rafeeq13')
.then((reslt) => {
 return reslt.json();
})
.then((data) => {
 console.log(data);
})
.catch((err) => console.log(err))