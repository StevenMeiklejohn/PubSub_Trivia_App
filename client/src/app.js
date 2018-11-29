const FormView = require('./views/form.js');
const ListView = require('./views/list.js');
const TriviaTest = require('./views/trivia_test.js');
const BucketList = require('./models/bucket_list.js');
const Trivia = require('./models/trivia.js');
const CategoryView = require('./views/category_select.js');
const DifficultyView = require('./views/difficulty_select.js');
const TypeView = require('./views/type_select.js');
const QuestionView = require('./views/question_view.js');
const AnswerSelectView = require('./views/answer_select_view.js');
const ResultsView = require('./views/results_view.js');



document.addEventListener('DOMContentLoaded', () => {

  const categoryDropDown = document.querySelector('#category');
  const categoryView = new CategoryView(categoryDropDown);
  categoryView.setup();

  const difficultyDropDown = document.querySelector('#difficulty');
  const difficultyView = new DifficultyView(difficultyDropDown);
  difficultyView.setup();

  // const typeDropDown = document.querySelector('#type');
  // const typeView = new TypeView(typeDropDown);
  // typeView.setup();

  const results = document.querySelector('#result');
  console.log('result element', results);
  const resultsView = new ResultsView(results);
  resultsView.setup();

  const question = document.querySelector('#question');
  const questionView = new QuestionView(question, resultsView);
  questionView.setup();

  const answers = document.querySelector('#answer');
  answers.innerHTML ="";
  const answerSelect = new AnswerSelectView(answers);
  answerSelect.setup();









  const button = document.querySelector('.btn');
  const trivia = new Trivia(button);
  trivia.setup()
});
