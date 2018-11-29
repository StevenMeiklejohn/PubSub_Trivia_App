const PubSub = require('../helpers/pub_sub.js');


const ResultsView = function(element){
  this.result = null;
  this.element = element;
}


ResultsView.prototype.setup = function(){

PubSub.subscribe('QuestionView:AnswerCheckResult', (evt) => {
  this.result = evt.detail;
  this.renderResult();
})
};

ResultsView.prototype.renderResult = function(){
  this.element.removeAttribute("class");
  if(this.result === "correct"){
  this.element.classList.add("correct");
  this.element.innerHTML = this.result;
} else {
  this.element.classList.add("incorrect");
  this.element.innerHTML = this.result;
}
}


module.exports = ResultsView;
