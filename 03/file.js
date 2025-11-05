const fs = require("fs");

// Sync....
// Blocking....
// fs.writeFileSync("./test.txt", "Hello World");

// Async....
// Non-Blocking....
// fs.writeFile("./test-async.txt", "Hello Async World", (err) => {});

// const result =fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);


// Returns error....   
// Reason : result print first then value assigned to error....
// As asyn is non-blocking

// const result =fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
        
//     }
// });

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `\nDate is : ${new Date().getDate().toLocaleString()}`);


// fs.appendFileSync("./test.txt", `\nDate is : ${Date.now()} Hey There`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt").isFile());

fs.mkdirSync("my-Docs");
fs.mkdirSync("my-Sec-Docs/a/b/c/d/e", { recursive: true });