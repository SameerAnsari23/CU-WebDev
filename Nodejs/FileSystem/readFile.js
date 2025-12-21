//1 require fs
const fs = require('fs/promises');

// 2 define path
const filepath = __dirname + '/data.json';

// 3 read a file
// fs.readFile(filepath)
// .then((data) => {
//  data = JSON.parse(data);
//  console.log(data);
//  console.log(data.Swati)
// })
// .catch((err) => {
//  console.log(err);
// })


// Async and Await
async function getData() {
 try{
  let data = await fs.readFile(filepath);
  data = JSON.parse(data);
  console.log(data);
 }
 catch(err){
  console.log(err)
 }
}
getData();


