const PubSub = require('../helpers/pub_sub.js');


const CategoryView = function(element){
  this.categories = [
    {'category': 'General Knowledge', 'number': 9},
    {'category': 'Entertainment: Books', 'number': 10},
    {'category': 'Entertainment: Film', 'number': 11},
    {'category': 'Entertainment: Music', 'number': 12},
    {'category': 'Entertainment: Musicals & Theatres', 'number': 13},
    {'category': 'Entertainment: Television', 'number': 14},
    {'category': 'Entertainment: Video Games', 'number': 15},
    {'category': 'Entertainment: Board Games', 'number': 16},
    {'category': 'Science & Nature', 'number': 17},
    {'category': 'Science: Computers', 'number': 18},
    {'category': 'Science: Mathematics', 'number': 19},
    {'category': 'Mythology', 'number': 20},
    {'category': 'Sports', 'number': 21},
    {'category': 'Geography', 'number': 22},
    {'category': 'History', 'number': 23},
    {'category': 'Politics', 'number': 24},
    {'category': 'Art', 'number': 25},
    {'category': 'Celebrities', 'number': 26},
    {'category': 'Animals', 'number': 27},
    {'category': 'Vehicles', 'number': 28},
    {'category': 'Entertainment: Comics', 'number': 29},
    {'category': 'Science: Gadgets', 'number': 30},
    {'category': 'Entertainment: Japanese Anime & Manga', 'number': 31},
    {'category': 'Entertainment: Cartoon & Animations', 'number': 32}
  ]
  this.element = element;
  this.select = null;

}


CategoryView.prototype.setup = function(){


  var select = document.createElement('select');
  this.select = select;
  this.element.appendChild(this.select);
  this.categories.forEach((category) => {
    // console.log(category);
  var option = document.createElement('option');

  option.value = category['number'];
  option.text = category['category'];
  select.appendChild(option);
  })

  this.select.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;

    PubSub.publish('CategorySelect:change', selectedIndex);
    console.log('CategorySelect:change', selectedIndex);
  });

  }


module.exports = CategoryView;
