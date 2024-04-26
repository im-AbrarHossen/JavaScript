let gameNumber = 273;
let userNumber = prompt("Guess the game number:");

while(userNumber != gameNumber) {
    userNumber = prompt("You guess the wrong number. Please guess again:");
}
console.log("Congratulations !!!! You guess the right number.");