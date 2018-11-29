const PubSub = require('../helpers/pub_sub.js');


const DifficultyView = function(element){
  this.difficulties = ['easy', 'medium', 'hard'];
  this.element = element;
  this.select = null;

}


DifficultyView.prototype.setup = function(){


  var select = document.createElement('select');
  this.select = select;
  this.element.appendChild(this.select);
  this.difficulties.forEach((category) => {
    // console.log(category);
  var option = document.createElement('option');

  option.value = category;
  option.text = category;
  select.appendChild(option);
  })

  this.select.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;

    PubSub.publish('DifficultySelect:change', selectedIndex);
    console.log('DifficultySelect:change', selectedIndex);
  });

  }


module.exports = DifficultyView;
