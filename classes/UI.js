export default class UI {
    static printCategories(categories){
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static printQuestions(questions){
        const container = document.getElementById('question-container');
        container.innerHTML = '';
        questions.forEach((question) => {
            container.innerHTML += `<div class="col-md-12" mt-4>
                                       <div class="card" h-100>
                                          <div class="card-body">
                                             ${question.question}
                                          </div>
                                       </div>
                                    </div>`
        });
    }
    static printAnswers(answers){
        const container = document.getElementById('answer-container');
        container.innerHTML = '';
        answers.forEach((answer) => {
            container.innerHTML += `<div class="col-md-12 mt-4">
                                       ${answer.answer}
                                    </div>`
        });
    }
}