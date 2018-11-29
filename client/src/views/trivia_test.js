const PubSub = require('../helpers/pub_sub.js');


const TriviaTest = function(listElement) {
  this.element = listElement;
};

TriviaTest.prototype.setup = function() {
  PubSub.subscribe('Trivia:Questions-loaded', (evt) => {
    const items = evt.detail;
    console.log(items);
  });
};


module.exports = TriviaTest;
