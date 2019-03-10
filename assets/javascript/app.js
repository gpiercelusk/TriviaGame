var triviaQuestions = [
  {
    question: "What is Leonardo's bandana color?",
    rightAnswer: 2,
    choices: ["Green", "Purple", "Blue", "Orange"]
  }, {
    question: "What is Donatello's weapon of choice?",
    rightAnswer: 0,
    choices: ["The Bo Staff", "Gun", "Fists", "Twin Sais"]
  }, {
    question: "What is the one ingredient the turtles (specifically Michelangelo) do NOT like on their pizzas?",
    rightAnswer: 1,
    choices: ["Pineapple", "Anchovies", "Ham", "Olives"]
  }, {
    question: "What is April O'Neil line of work?",
    rightAnswer: 3,
    choices: ["Chef", "Boxer", "Admin Assistant", "News Reporter"]
  }, {
    question: "What substance took the turtles from normal reptiles to crime-fighting ninjas?",
    rightAnswer: 1,
    choices: ["Radiation", "The Ooze", "Pizza", "Vaccines"]
  }, {
    question: "What is the name of the group of ninjas led by The Shredder?",
    rightAnswer: 0,
    choices: ["The Foot Clan", "The Hand Clan", "The Van Buren Clan", "The Shredder Clan "]
  }, {
    question: "What was the name of the fifth Teenage Mutant Ninja Turtle?",
    rightAnswer: 3,
    choices: ["Becky", "Angela", "April", "Venus de Milo"]
  }, {
    question: "What is Casey Jones weapon of choice?",
    rightAnswer: 2,
    choices: ["A Bat Wrapped in Barbed-wire", "Fists", "Hockey Stick", "Not a Character"]
  }, {
    question: "What is Raphael's bandana color?",
    rightAnswer: 1,
    choices: ["Green", "Red", "Blue", "Orange,"]
  }, {
    question: "What is Michelangelo's weapon of choice?",
    rightAnswer: 0,
    choices: ["Nunchaku", "Swords", "Bat", "Grappling Hook"]
  }, {
    question: "The Teenage Mutant Ninja Turtles comic was originally a spoof on what Marvel franchise?",
    rightAnswer: 1,
    choices: ["Star Wars", "Daredevil", "X-Men", "The Hulk"]
  }, {
    question: "Who are the creators of TMNT?",
    rightAnswer: 3,
    choices: ["Stan Lee and Steve Ditko", "Neil Gaiman and Terry Pratchett", "Peter Laird and Kevin Eastman", "Holden McNeil and Banky Edwards"]
  }, {
    question: "Who is the Turtle's sensei?",
    rightAnswer: 3,
    choices: ["Rocksteady", "Shredder", "Monkey D. Luffy", "Splinter"]
  }, {
    question: "How long did the '80s cartoon series run?",
    rightAnswer: 2,
    choices: ["5 Years", "20 Years", "10 Years", "3 Years"]
  }, {
    question: "What was the name of the Teenage Mutant Ninja Turtles musical tour that kicked off in 1990?",
    rightAnswer: 0,
    choices: ["The Out of the Shell tour", "Out of the Shadows Tour", "Tour de Pizza", "4 Brothers Tour"]
  }];

var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var notAnswered;
var seconds;
var time;
var questionsAnswered;
var userChoice;
var choiceText = {
  correct: "Most excellent, dude, I was thinking the same thing, myself",
  incorrect: "We turtles don’t know the meaning of the word ‘defeat’.",
  timeOut: "You don’t flirt with the enemy Leo. You take them down!",
  done: "Most excellent, dude, I was thinking the same thing, myself."
}

$("#startBtn").on("click", function () {
  $(this).hide();
  newGame();
});
$("#restartBtn").on("click", function () {
  $(this).hide();
  newGame();
});

function newGame() {
  $("#endGameMessage").empty();
  $("#correctAnswers").empty();
  $("#incorrectAnswers").empty();
  $("#incorrectAnswers").empty();
  $("#notAnswered").empty();
  currentQuestion = 0;
  correctAnswer = 0;
  incorrectAnswer = 0;
  notAnswered = 0;
  newQuestion();
}
function newQuestion() {
  $("#message").empty;
  $("#correctedAnswer").empty;
  // $("#gif").empty();
  answered = true;
  //appends questions and answer to the page
  $("#currentQuestion").html("Question #: " + (currentQuestion + 1) + "/" + triviaQuestions.length);
  $(".questionArea").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
  for (var i = 0; i < 4; i++) {
    var ansChoices = $("<div>");
    ansChoices.text(triviaQuestions[currentQuestion].choices[i]);
    ansChoices.attr({ "data-index": i });
    ansChoices.addClass("thisChoice");
    $(".answerChoices").append(ansChoices);
  }

}










// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

//   * If the player selects the correct answer, show a screen congratulating them for choosing the right option.After a few seconds, display the next question-- do this without user input.

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