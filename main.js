import request from './classes/request.js';
import UI from './classes/UI.js';




const form = document.querySelector('#form-questions');//

form.addEventListener('submit', (event) => {
    event.preventDefault();
    request.getQuestions()
      .then(response => response.json())
      .then(data => {
        UI.printQuestions(data.results)
      })
});
request.getCategories()
  .then(response => response.json())
  .then(data => UI.printCategories(data.trivia_categories))

