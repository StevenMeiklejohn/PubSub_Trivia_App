const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Trivia = function(button){
  this.data = null;
  this.categoryNumber = null;
  this.difficulty = null;
  this.type = "multiple";
  this.button = button;

};


Trivia.prototype.setup = function(){
  PubSub.subscribe('CategorySelect:change', (evt) => {
    this.categoryNumber = evt.detail;
    console.log('Trivia: category select received', this.categoryNumber);
  });
  PubSub.subscribe('DifficultySelect:change', (evt) => {
    this.difficulty = evt.detail;
    console.log('Trivia: category select received', this.difficulty);
  });
  // PubSub.subscribe('TypeSelect:change', (evt) => {
  //   this.type = evt.detail;
  //   console.log('Trivia: type select received', this.type);
  // });
  this.button.addEventListener('click', (evt) => {
    console.log('Button clicked - categoryNumber', this.categoryNumber);
    console.log('Button clicked - difficulty', this.difficulty);
    console.log('Button clicked - type', this.type);
    this.getData(this.categoryNumber, this.difficulty, this.type);


  })
};

Trivia.prototype.getData = function (categoryNumber, difficulty, type) {
  const url = 'https://opentdb.com/api.php?amount=10&category=' + categoryNumber + '&difficulty=' + difficulty + '&type=' + type;
  const request = new RequestHelper(url);
  request.get()
    .then((data) => {
      console.log(data.results);
      this.data = data.results;
      PubSub.publish('Trivia:Questions-loaded', this.data);
    })
    .catch((message) => {
      console.error(message);
    });
};

module.exports = Trivia;
