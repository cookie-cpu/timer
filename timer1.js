let input = process.argv.splice(2)

//process.stdout.write('\x07');  //Timer noise

console.log(`input is: ${input}`)


for (const char of input) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, char * 1000);
}