import request from './classes/request.js';
import UI from './classes/UI.js';
import results from './classes/results.js';

const form = document.querySelector('#form-questions');//
const finishForm = document.querySelector('#question-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    request.getQuestions()
      .then(response => response.json())
      .then(data => {
        UI.printQuestions(data.results)
      })
});
finishForm.addEventListener('click', () => {
  results.countAnswers()
    //.then(response => response.json())
    // .then(data => {
    //   UI.printResults(data)
    // })
     
});
request.getCategories()
  .then(response => response.json())
  .then(data => UI.printCategories(data.trivia_categories))

