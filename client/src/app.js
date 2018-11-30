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
const PubSub = require('./helpers/pub_sub.js');



document.addEventListener('DOMContentLoaded', () => {

  const inputDiv = document.querySelector('#inputs');
  inputDiv.innerHTML = "";

  clearInputView = function(div){
    div.innerHTML = "";
  }

  PubSub.subscribe('Trivia:Questions-loaded', (evt) => {
    const triviaData = evt.detail;
    displayQuestionAnswerView(inputDiv);
    PubSub.publish('App:Questions-loaded', triviaData);
  });



  displayQuestionAnswerView = function(div){
    console.log('displayQuestionAnswerView called');
    const inputDiv = div;
    inputDiv.innerHTML = "";

    const questionDiv = document.createElement('div');
    questionDiv.id = "question";
    inputDiv.appendChild(questionDiv);
    const questionView = new QuestionView(questionDiv, inputDiv);
    questionView.setup();

    const answerDiv = document.createElement('div');
    answerDiv.id = "answer";
    inputDiv.appendChild(answerDiv);
    const answerSelect = new AnswerSelectView(answerDiv);
    answerSelect.setup();

    const resultsDiv = document.createElement('div');
    resultsDiv.id = "results";
    const resultsView = new ResultsView(resultsDiv);
    resultsView.setup();
  // Type Input (unused)
  // const typeDropDown = document.querySelector('#type');
  // const typeView = new TypeView(typeDropDown);
  // typeView.setup();
}



  displayInputView = function(div){
    const inputDiv = div;
    inputDiv.innerHTML = "";
    // // Category Input
    const categoryDiv = document.createElement('div');
    categoryDiv.id = "category";
    inputDiv.appendChild(categoryDiv);
    const categoryHeading = document.createElement('p');
    categoryHeading.innerHTML = "Please Select A Question Category";
    categoryDiv.appendChild(categoryHeading);
    const categoryView = new CategoryView(categoryDiv);
    categoryView.setup();

    // Difficulty Input
    const difficultyDiv = document.createElement('div');
    difficultyDiv.id = "difficulty";
    inputDiv.appendChild(difficultyDiv);
    const difficultyHeading = document.createElement('p');
    difficultyHeading.innerHTML = "Please Select the question difficulty";
    difficultyDiv.appendChild(difficultyHeading);
    const difficultyView = new DifficultyView(difficultyDiv);
    difficultyView.setup();

    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = "Go!";
    inputDiv.appendChild(button);

    const trivia = new Trivia(button);
    trivia.setup()
  }








  displayInputView(inputDiv);
  // displayQuestionAnswerView(inputDiv);


});
