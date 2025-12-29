//1 require fs
const fs = require('fs/promises');

//2 create filepath
const filepath = __dirname + '/data.json';

let data = {
 Vennela: 'Biryani',
 Sravani: 'Fried Rice',
 Swati: 'Paneer',
 Janvi: 'Aloo Fry'
};

fs.writeFile(filepath, JSON.stringify(data))
.then(() => {
 console.log("Task is done");
})
.catch((err) => {
 console.log(err);
})