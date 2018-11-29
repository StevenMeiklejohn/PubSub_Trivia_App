const PubSub = require('../helpers/pub_sub.js');


const AnswerSelectView = function(element){
  this.answers = null;
  this.element = element;
}


AnswerSelectView.prototype.setup = function(){

PubSub.subscribe('QuestionView:shuffledAnswerArrayReady', (evt) => {
  this.answers = evt.detail;
  this.renderAnswers();
})
};

AnswerSelectView.prototype.renderAnswers = function(){

  while(this.element.firstChild){
    this.element.removeChild(this.element.firstChild);
}
  this.answers.forEach((answer) => {
    const posAnswer = document.createElement('button');
    posAnswer.id = answer;
    posAnswer.href = answer;
    posAnswer.innerHTML = answer;
    posAnswer.classList.add("answerBtn")
    posAnswer.addEventListener('click', (evt) => {
      console.log(evt.srcElement.id);
      PubSub.publish('AnswerSelect:AnswerButtonClicked', evt.srcElement.id);
    })
    this.element.appendChild(posAnswer);
  })
}


module.exports = AnswerSelectView;
