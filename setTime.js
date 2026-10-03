const timer = 5000;
const outputInterval = 1000;
let val = 0;

process.stdout.write(`${timer/1000} second delay\n`);

const ready = () => {
    process.stdout.write(`ready\n`);
    clearInterval(myInt);
}
const counter = () => {
    val++;
    process.stdout.write(`${(timer/1000)-val}`);
}

const myInt = setInterval(() => {
    val++;
    process.stdout.write(`${(timer/1000)-val}`);
}, outputInterval);
setTimeout(() => {
    process.stdout.write(`ready\n`);
    clearInterval(myInt);
}, timer);

