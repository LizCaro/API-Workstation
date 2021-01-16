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

    
        let answersAll = []
        answers.forEach((element) => {

            const answerChoices = [...element.incorrect_answers]
            
            answerChoices.splice(Math.floor(Math.random() * 4) - 1, 0, element.correct_answer)
            answersAll.push(answerChoices)

            
        })
        for (let i = 0; i < answersAll.length; i++) {

                container.innerHTML += `<div class="card-body">
                                            <div>
                                                <input type="radio" id="c" name="${answersAll[i]}">
                                                <label id="c_text" for="c">${answersAll[i][0]}</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="c" name="${answersAll[i]}">
                                                <label id="c_text" for="c">${answersAll[i][1]}</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="c" name="${answersAll[i]}">
                                                <label id="c_text" for="c">${answersAll[i][2]}</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="c" name="${answersAll[i]}">
                                                <label id="c_text" for="c">${answersAll[i][3]}</label>
                                            </div>
                                        </div>`
        } 
        console.log(answersAll)
       
    }
}