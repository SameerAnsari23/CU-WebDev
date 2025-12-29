// async function Ashrutha() {
//  return "Heeellloooo... i am Ashrutha"
// }
// Ashrutha()
// .then((hello) => {
//  console.log(hello)
// })


// let Sravani = new Promise(function(resolve, reject) {
//  setTimeout(() => {
//   resolve({studenName: "Sravani", favouriteFood: "Fried Rice"});
//  }, 2000)
// })

// async function student() {
//  try{
//   const data = await Sravani
//   console.log(data);
//  }
//  catch(err) {
//   console.log(err);
//  }
// }
// // student()


// const Resutaurant = new Promise(function(resolve, reject) {
//  const biryani = false;
//  if(biryani) {
//   resolve("Yes today i will eat yummy biryani");
//  }else {
//   reject("😞, i want biryani!!!");
//  }
// })

// async function hungry() {
//  try{
//   const food = await Resutaurant
//   console.log(food);
//  }
//  catch(err) {
//   console.log(err);
//  }
// }
// hungry();


async function getData() {
 try{
  const reslt = await fetch('https://api.github.com/users/sameeransari23');
  const data =  await reslt.json();
  console.log(data);
 }
 catch(err){
  console.log(err);
 }
}

getData();