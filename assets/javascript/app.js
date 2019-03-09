$(document).ready(function () {

  var rightAnswers = 0;
  var wrongAnswers = 0;
  var notAnswered = 0;
  var timeLeft = 20;
  var intervalId;
  var questionAndAnswer = 0;
  var isAnswered = false;
  var right;

  var triviaGame = [{
    question: "What is Leonardo's bandana color?",
    answerOptions: ["Green", "Blue", "Purple", "Orange"],
    correctAnswer: 1
  }, {
    question: "What is Donatello's weapon of choice?",
    answerOptions: ["Gun", "Fists", "The Bo Staff", "Twin Sais"],
    correctAnswer: 2
  }, {
    question: "What is the one ingredient the turtles (specifically Michelangelo) do NOT like on their pizzas?",
    answerOptions: ["Anchovies", "Pineapple", "Ham", "Olives"],
    correctAnswer: 0
  }, {
    question: "Who does April O'Neil do for work?",
    answerOptions: ["Admin Assistant", "Boxer", "Chef", "News Reporter"],
    correctAnswer: 3
  }, {
    question: "What substance took the turtles from normal reptiles to crime-fighting ninjas?",
    answerOptions: ["Radiation", "Vaccines", "The Ooze", "Pizza"],
    correctAnswer: 2
  }, {
    question: "What is the name of the group of ninjas led by The Shredder?",
    answerOptions: ["The Foot Clan", "The Hand Clan", "The Van Buren Clan", "The Shredder Clan"],
    correctAnswer: 0
  }, {
    question: "What was the name of the fifth Teenage Mutant Ninja Turtle?",
    answerOptions: ["Becky", "April", "Venus de Milo", "Angela"],
    correctAnswer: 2
  }, {
    question: "What is Casey Jones weapon of choice?",
    answerOptions: ["Hockey Stick", "Fists", "Not a Character", "A Bat Wrapped in Barbed-wire"],
    correctAnswer: 0
  }, {
    question: "What is Raphael's bandana color?",
    answerOptions: ["Green", "Blue", "Purple", "Red"],
    correctAnswer: 3
  }, {
    question: "What is Michelangelo's weapon of choice?",
    answerOptions: ["Swords", "Bat", "Nunchaku", "Grappling Hook"],
    correctAnswer: 2
  }, {
    question: "The Teenage Mutant Ninja Turtles comic was originally a spoof on what Marvel franchise?",
    answerOptions: ["Star Wars", "Daredevil", "X-Men", "The Hulk"],
    correctAnswer: 1
  }, {
    question: "Who are the creators of TMNT?",
    answerOptions: ["Stan Lee and Steve Ditko", "Peter Laird and Kevin Eastman", "Neil Gaiman and Terry Pratchett", "Holden McNeil and Banky Edwards"],
    correctAnswer: 1
  }, {
    question: "Who is the Turtle's sensei?",
    answerOptions: ["Rocksteady", "Shredder", "Splinter", "Monkey D. Luffy"],
    correctAnswer: 2
  }, {
    question: "How long did the '80s cartoon series run?",
    answerOptions: ["10 years", "5 Years", "20 Years", "3 Years"],
    correctAnswer: 0
  }, {
    question: "What was the name of the Teenage Mutant Ninja Turtles musical tour that kicked off in 1990?",
    answerOptions: ["Out of the Shadows Tour", "The Out of the Shell tour", "Tour de Pizza", "4 Brothers Tour"],
    correctAnswer: 1
  }];







// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

//   * If the player selects the correct answer, show a screen congratulating them for choosing the correct option.After a few seconds, display the next question-- do this without user input.

// * The scenario is similar for wrong answers and time - outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game(without reloading the page).

// Attempt to complete homework assignment as described in instructions.If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.


// Add a`README.md` to your repository describing the project.Here are some resources for creating your`README.md`.Here are some resources to help you along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

//   - - -

//   ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio.Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment.To receive an 'A' on any assignment, you must link to it from your portfolio.

// - - -

//   ### A Few Last Notes

//   * Styling and theme are completely up to you.Get creative!

//   * Remember to deploy your assignment to Github Pages.

// * If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.