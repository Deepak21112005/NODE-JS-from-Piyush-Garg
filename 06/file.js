const fs = require('fs');

// Sync...
// Blocking...
console.log(1);
const data = fs.readFileSync('./contacts.txt', 'utf8');
console.log(data);
console.log(2);

// Async...
// Non-blocking...
console.log(3);
fs.readFile('./contacts.txt', 'utf8', (err, data) => {
    console.log(data);
});
console.log(4);


// max Thread Pool size : no. of cpu cores
// my 20 core cpu => upto 20 thread pool size
const os = require('os');
console.log(os.cpus().length);