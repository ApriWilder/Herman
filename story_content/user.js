window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Get the value of the QuizScore variable
var player = GetPlayer();
var quizScore = player.GetVar("QuizScore");

// Truncate the value (remove decimal places)
var quizPercent = Math.floor(quizScore);

// Set the value of the QuizPercent variable
player.SetVar("QuizPercent", quizPercent);

// Update the text box with the formatted percentage
var scoreDisplay = quizPercent + "%";
document.getElementById("yourTextBoxId").innerText = scoreDisplay;
}

};
