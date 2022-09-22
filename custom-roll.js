
const prompt = require('prompt-sync')({sigint: true});

let sides = prompt('How man sides does your dice have? ');
sides = Number(sides)

let random_number = Math.ceil(Math.random() * sides)

console.log(random_number)