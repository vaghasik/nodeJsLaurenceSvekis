const num = Math.floor(Math.random()*10)+1;
process.stdout.write('Guess a number 1 to 10?\n')
process.stdin.on('data', data => {
    let guess = data;
  process.stdout.write(`Your guess was ${guess}\n`);
  if(guess == num) {
    process.stdout.write(`Correct, you guessed ${num}`);
    process.exit();
  } else {
    process.stdout.write(`Wrong guess of ${guess}\n Guess a number 1 to 10?\n`);
  }
})