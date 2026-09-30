let val = "test";
console.log(val);
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(process);
global.console.log("Hello");
console.log(process.pid);

console.log(process.argv);
const first = process.argv[2];
const last = process.argv[3];
let message = `Hi, ${first} and ${last}`;
console.log(message);
