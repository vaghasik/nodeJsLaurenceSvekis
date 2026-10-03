let timer = 5000;
let intervalTime = 1000;
let val = 0;

const myInt = setInterval(() => {
    val++;
    process.stdout.write(`${(timer/1000)-val}`);
}, intervalTime);

setTimeout(() => {
    process.stdout.write(`ready\n`);
    clearInterval(myInt);
    process.stdout.write(`\n`);
}, timer);
