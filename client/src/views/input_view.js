const PubSub = require('../helpers/pub_sub.js');
const CategoryView = require('./category_select.js');
const DifficultyView = require('./difficulty_select.js');


const InputView = function(element, categoryDropDown, difficultyDropDown, submitButton, trivia){
  this.element = element;
  this.categoryDropDown = categoryDropDown;
  this.difficultyDropDown = difficultyDropDown;
  this.submitButton = submitButton;
  this.trivia = trivia;
  this.visibile = true;
}

InputView.prototype.setup = function(){
  if(this.visible === true){
  const categoryText = document.createElement('p');
  categoryText.innerHTML = "Please Select A Question Category";
  this.element.appendChild(categoryText);
  const categoryView = new CategoryView(this.categoryDropDown);
  categoryView.setup();

  const difficultyView = new DifficultyView(this.difficultyDropDown);
  difficultyView.setup();

  this.trivia.setup()
}
}





module.exports = InputView;
