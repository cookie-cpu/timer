/*
    The user can press b and it should beep right away
    The user can input any number from 1 to 9 and it should
        immediately output "setting timer for x seconds...", and
        beep after that number of seconds has passed
    The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// if (key === '\u0003') {
//   console.log("Thanks for using me")
//   process.exit();
// }

rl.question("Enter a number from 1 to 9", (num) => {
  console.log(num)
  rl.close
})