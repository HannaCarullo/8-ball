
const options = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
]

const magicBall = document.getElementById('mb-container');
const response = document.getElementById('response');

magicBall.addEventListener("click",function(){
  
  const index = Math.floor(Math.random() * 20)
  const message = options[index]
  magicBall.className = 'magicball__outer animate'
  
  setTimeout(() => { 
    response.textContent = message;
    response.style.fontSize = '1.1rem'
    magicBall.className = 'magicball__outer'
  },3000)
})


/* // declares userName
let userName = '';

// Prints Hello, userName!, otherwise Hello!
userName ? console.log(`Hello, ${userName}!` ) : console.log('Hello!');

// declares value of userQuestion
const userQuestion = 'Will I win the lottery today?';

// Prints userName has asked - 'userQuestion'
console.log(`${userName} has asked - '${userQuestion}'`);

// Result would be a decimal, to get a whole number add Math.floor() before Math.random
let randomNumber = Math.floor(Math.random() * 8); // number was multiplied by 8 bc we need number between 0 and 7
console.log(randomNumber);

// Declares eightBall
let eightBall = '';

switch (randomNumber) {
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
}
console.log(`The Magic Eight Ball says: ${eightBall}.`)

*/