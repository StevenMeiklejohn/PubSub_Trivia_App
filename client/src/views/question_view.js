const PubSub = require('../helpers/pub_sub.js');


const QuestionView = function(element, resultElement){
  this.element = element;
  this.question = null;
  this.possibleAnswers = [];
  this.correctAnswer = null;
  this.resultElement = resultElement;
}


QuestionView.prototype.setup = function(){

PubSub.subscribe('Trivia:Questions-loaded', (evt) => {
  const questionsArray = evt.detail;
  const randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  console.log(randomQuestion);
  console.log(randomQuestion.question);
  this.question = randomQuestion.question;
  this.correctAnswer = randomQuestion.correct_answer;
  console.log("correct answer", this.correctAnswer);
  this.possibleAnswers = randomQuestion.incorrect_answers;

  this.possibleAnswers.push(this.correctAnswer);
  console.log(this.possibleAnswers);
  const shuffledArray = this.shuffleArray(this.possibleAnswers);
  console.log(shuffledArray);

  this.element.innerHTML = this.question;

  this.resultElement.innerHTML = "";

  PubSub.publish('QuestionView:shuffledAnswerArrayReady', shuffledArray);

});
PubSub.subscribe('AnswerSelect:AnswerButtonClicked', (event) => {
  this.checkAnswer(event.detail);
  console.log(event.detail);
})
}


QuestionView.prototype.shuffleArray = function(array){
  var i = array.length, j, temp;
  if ( i == 0 ) return array;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = array[i];
     array[i] = array[j];
     array[j] = temp;
  }
  return array;
}

QuestionView.prototype.checkAnswer = function(guess){
  if(guess === this.correctAnswer){
    PubSub.publish('QuestionView:AnswerCheckResult', "correct");
    console.log('Result:', "correct");
  }

  else{
    PubSub.publish('QuestionView:AnswerCheckResult', "incorrect");
    console.log('Result:', "incorrect");
  }
}


module.exports = QuestionView;
