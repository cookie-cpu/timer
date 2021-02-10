let input = process.argv.splice(2)

//process.stdout.write('\x07');  //Timer noise

console.log(`timer will go off at: ${input} seconds`)
console.log(input.filter(item => typeof item === 'number'));


for (const num of input) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
}

//Edge Cases
/*
[x] No numbers are provided
[ ] An input is negative
[ ] Input is not a num
*/