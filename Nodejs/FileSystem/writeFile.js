//1 require filesystem
const fs = require('fs');

const filepath = __dirname + '/data.json'
// console.log(__dirname)

let data = ["Rafeeq", 'Pavani', "Sravani", "Vennela", "Ashrutha", "sony", "Janvi"];

fs.writeFile(filepath, JSON.stringify(data), (err) => {
 if (err) {
  console.log(err);
 }
 else{
  console.log("writing done")
 }
})

