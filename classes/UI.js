export default class UI {
    static printCategories(categories){
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static printQuestions(answers){
        const questionItem =document.getElementById('question-item')
        const a_text =document.getElementById('a_text')
        const b_text =document.getElementById('b_text')
        const c_text =document.getElementById('c_text')
        const d_text =document.getElementById('d_text')
        const nextQuestions = document.getElementById('next-questions');

        let quesitonsAll = []

        answers.forEach((element) => {
            const questionsCoices = element.question
            const answerChoices = [...element.incorrect_answers]
            
            answerChoices.splice(Math.floor(Math.random() * 4) - 1, 0, element.correct_answer)
            quesitonsAll.push(questionsCoices)
            quesitonsAll.push(answerChoices)

        })
        
        for (let i = 0; i < quesitonsAll.length; i++) {
            questionItem.innerText = quesitonsAll[0]
            a_text.innerText = quesitonsAll[1][0]
            b_text.innerText = quesitonsAll[1][1]
            c_text.innerText = quesitonsAll[1][2]
            d_text.innerText = quesitonsAll[1][3]
        } 
        let currentQuestion = 0;
        nextQuestions.addEventListener('click', () => {
            currentQuestion++

            questionItem.innerText = quesitonsAll[currentQuestion++ + 1];      
            a_text.innerText = quesitonsAll[currentQuestion+ 1][0]
            b_text.innerText = quesitonsAll[currentQuestion+ 1][1]
            c_text.innerText = quesitonsAll[currentQuestion+ 1][2]
            d_text.innerText = quesitonsAll[currentQuestion+ 1][3]
            
        })
        console.log(quesitonsAll)
    }
}