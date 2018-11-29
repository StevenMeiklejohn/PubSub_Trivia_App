const PubSub = require('../helpers/pub_sub.js');


const TypeView = function(element){
  this.difficulties = ['boolean', 'multiple'];
  this.element = element;
  this.type = null;

}


TypeView.prototype.setup = function(){


  var select = document.createElement('select');
  this.select = select;
  this.element.appendChild(this.select);
  this.difficulties.forEach((type) => {
    // console.log(category);
  var option = document.createElement('option');

  option.value = type;
  option.text = type;
  select.appendChild(option);
  })

  this.select.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;

    PubSub.publish('TypeSelect:change', selectedIndex);
    console.log('TypeSelect:change', selectedIndex);
  });

  }


module.exports = TypeView;
