
const chalk = require('chalk');
const readlineSync = require('readline-sync');
const ctx = new chalk.Instance({ level: 3 });

console.log(chalk.green.bold("Welcome👋  There is a " + chalk.red("IMPOSTER") + " among us"));
console.log(chalk.yellow("_____________________________________________\n"));

let score = 0;

let userName = readlineSync.question(chalk.inverse.bold(' Can I know your name?') + chalk.bold('  YOU KINDA SUS!  \n '));
console.log('Hi ' + chalk.red(userName) +
  " Landing you to the spaceship now\n");

console.log(chalk.rgb(255, 0, 255)("You will be asked few questions related to among us. Answer them carefully and complete the tasks"))

console.log(chalk.inverse.bold.yellow("Note: Type the Correct Option {not the answer} and Press enter\n"))
let Questions = [
  {
    question: `1. Which Room Would You Swipe A Card In?
    
    a: Admin
    b: Cafe
    c: Kitchen
  	d: Kitchen\n`,
    answer: "a"
  },
  {
    question: `2. Which Of These Isn't A Map On The Game?
    
    a: The Skeld
    b: MIRA HQ
    c: Polus
  	d: Chima\n`,
    answer: "d"
  },
  {
    question: `3.Where Do You Find The Engine Fuel?
    
    a: Navigation
    b: Lower Engine
    c: Upper Engine
  	d: Storage\n`,
    answer: "d"
  },
  {
    question: `4.What Do You Clear From The Skeld O2 Filter?
    
    a: Rocks
    b: Fuel
    c: Paper
  	d: Leaves\n`,
    answer: "d"
  },
  {
    question: `5. What Is The Max Number Of Imposters??
    
    a: One
    b: Two
    c: Three
  	d: Five\n`,
    answer: "c"
  },
  {
    question: `6. How Many Wires Do You Connect When Fixing Wiring?
    
    a: Four
    b: Five
    c: Three
  	d: Six\n`,
    answer: "a"
  },
  {
    question: `7.What's the minimum number of players needed?
    
    a: Four
    b: Three
    c: Two
  	d: One\n`,
    answer: "a"
  },
  {
    question: `8. What's the name of the real-life game that Among Us is based on?
    
    a: Monsters
    b: Warewolf
    c: Trick n TReat
  	d: Devil\n`,
    answer: "b"
  },
  {
    question: `9. What are the names of the two teams in Among Us?
    
    a: Imposters and crewmates
    b: Imposters and astronuts
    c: Imposters and classmates
  	d: Imposters and devils\n`,
    answer: "a"
  },
  {
    question: `10. What's the planet called???
    
    a: Bolus
    b: Polus
    c: Potos
  	d: Bolo\n`,
    answer: "b"
  },
];

var highScores = [
  {
    name: "Hamsa",
    score: 10,
  },

  {
    name: "Nikki",
    score: 10,
  },
]


function play(question, choices, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.green.bold("Right answer ✔️"));
    score = score + 1;
    console.log(chalk.rgb(153, 0, 204)("Your Current score:" + chalk.rgb(255, 255, 0)(score)))
  } else {
    console.log(chalk.rgb(204, 0, 0).bold("Wrong ❌"));
    console.log(chalk.rgb(153, 0, 204)("Your Current score:" + score))
    console.log("The right answer is " + chalk.rgb(255, 136, 0).bold(answer + "\n"))
  }
}

for (i = 0; i < Questions.length; i++) {
  play(Questions[i].question, Questions[i].choices, Questions[i].answer)
}
console.log(chalk.yellow("_____________________________________________\n"));

console.log(chalk.rgb(255, 0, 102)("Your Total score : " + score));

console.log("HIGH SCORES ARE:");



for (var j=0; j<highScores.length; j++) {
 
console.log( highScores[j].name + ": " + highScores[j].score);
}



console.log("  Send screenshot of your scores to me \n")

console.log("Share this with your crewmates. Have a nice day😄")

