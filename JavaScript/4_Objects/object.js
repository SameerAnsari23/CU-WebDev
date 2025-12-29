// const user = {
//  name: "Rafeeq",
//  age: 20,
//  roll_no: 789,
//  sub: ["Data", "SWS", "cloudComputing"]
// }

// console.log(user)
// console.log(user.name)
// console.log(user.roll_no)
// console.log(user.sub)

// user.email = "rafeeq@gmail.com";

// console.log(user);

// user.age = 18;
// console.log(user)

// user.tagline = function() {
//  console.log("Hello, my name")
// }

// console.log(user.tagline())

// user.tagline = function() {
//  console.log(`hello, my name is ${this.name}`)
// }
// console.log(user.tagline())



const customer = {}
customer.name = "Akshaya"
customer.email = "bindu@gmail.com"
customer.phone_no = 3872638
// console.log(customer);


const user = {
 fullname: {
  first_Name: {
   name: "Vennela"
  },
  last_name: {
   lastName: "Gopidesi"
  }
 }
}

console.log(user.fullname.first_Name.name);
console.log(user.fullname.last_name.lastName);

user.fullname.first_Name.name = "Pinky";
// console.log(user)

const stu = [
 {
  name: "bindu",
  roll_no: 878
 },
 {
  name: "akshaya",
  roll_no: 988
 },
 {
  name: "Sravani",
  roll_no: 980
 }
]
// console.log(stu[1].name)

const obj = {
 name: "akshaya"
}
const obj1 = {
 name: "bindu"
}
const obj3 = {...obj, ...obj1}
console.log(obj3);