const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Instead of running through the same answer scheme, I want it to seem like the survey is interacting with the user by collecting their answers from previous quesitons and combining them in the answers.
rl.question('What\'s your name? Nicknames are also acceptable. ', (answer1) => {
  console.log(`Thank you ${answer1}! Onto the next quesiton!`);
  rl.question('What\'s an activity you like doing? Or a favourite hobby of yours? ', (answer2) => {
    console.log(`That sounds so cool ${answer1}! ${answer2} sounds like fun!`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Thank you ${answer1}! ${answer3} is great to listen to while you are ${answer2}`);
      rl.question('What is your favourite meal? ', (answer4) => {
        console.log(`Wow ${answer1}! ${answer4} sounds delicious!`);
        rl.question('Where is the best place to go to eat your favourite meal? ', (answer5) => {
          console.log(`Thank you ${answer1}! Sounds like ${answer5} would serve the best ${answer4}!`);
          rl.question('What is your absolute favourite movie? ', (answer6) => {
            console.log(`Great choice ${answer1}, I heard ${answer6} is amazing.`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at ', (answer7) => {
              console.log(`Thank you ${answer1}! ${answer7}, that sounds like a great skill to have!`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});

rl.question('What\'s an activity you like doing? Or a favourite hobby of yours? ', (answer) => {
  console.log(`Thank you ${answer1}! ${answer} sounds like fun!`);

  rl.close();
});