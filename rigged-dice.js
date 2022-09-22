const prompt = require('prompt-sync')({sigint: true});

let rigged_number = prompt('What is your rigged number? (1-6) ');
rigged_number = Number(rigged_number)

let random_number = Math.ceil(Math.random() * 7)
if (random_number === 7){
    console.log(rigged_number)
}   else {
    console.log(random_number)
}