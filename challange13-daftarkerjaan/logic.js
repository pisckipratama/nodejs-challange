const fs = require('fs');

// fs.open('message.txt', 'r', (err, fd) => {
//     console.log(fd);
// })

// let task = 'Belajar javascript';
// let arr = [];
// let output = " "
// console.log('dataData >', task.length);

// for (let i = 0; i < task.length; i++) {
//     output += task[i];
// }
// console.log('dataData >', output);
// arr.push({
//     "task": output.trim(),
//     "complete": false,
//     "tags": []
// })
// console.log(arr);

// let data = JSON.stringify(arr);
// console.log(data);

let tes = fs.readFileSync('data.json', 'utf8');
console.log(tes);
let arr = JSON.parse(tes);
console.log(arr);