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
        const finishQuestions = document.getElementById('finish-questions');
        

        let quesitonsAll = []
        let correct = []

        answers.forEach((element) => {
            const questionsCoices = element.question
            const answerChoices = [...element.incorrect_answers]
            const corrected = element.correct_answer
            
            answerChoices.splice(Math.floor(Math.random() * 4) - 1, 0, element.correct_answer)

            correct.push(corrected)
            quesitonsAll.push(questionsCoices)
            quesitonsAll.push(answerChoices)

        })
        
        for (let i = 0; i < quesitonsAll.length; i++) {
                questionItem.innerHTML = quesitonsAll[0]
                a_text.innerHTML = quesitonsAll[1][0]
                b_text.innerHTML = quesitonsAll[1][1]
                c_text.innerHTML = quesitonsAll[1][2]
                d_text.innerHTML = quesitonsAll[1][3]   
        } 


        let selectedAnswers = []
        let currentQuestion = 0;
        let contNumNext = 1;
        nextQuestions.addEventListener('click', () => {
            currentQuestion++
            const rbs = document.querySelectorAll('input[name="answer"]')
            let selecetValue;

            
            for (const rb of rbs) {
                if(rb.checked) {
                document.getElementById('a').setAttribute('value', a_text.innerHTML)
                document.getElementById('b').setAttribute('value', b_text.innerHTML)
                document.getElementById('c').setAttribute('value', c_text.innerHTML)
                document.getElementById('d').setAttribute('value', d_text.innerHTML)
                selecetValue = rb.value
                selectedAnswers.push(selecetValue)
                console.log(selectedAnswers)
                rb.checked = false;
                
                }
            }
            const totalQuestions = document.getElementById('total-questions').value;

            if (contNumNext === totalQuestions - 1) {
                nextQuestions.innerHTML = 'Finish';
                // finishQuestions.style.display = 'block';
            }

            questionItem.innerHTML = quesitonsAll[currentQuestion++ + 1];    
            
            if (a_text.innerHTML = quesitonsAll[currentQuestion+ 1]) {
                a_text.innerHTML = quesitonsAll[currentQuestion+ 1][0]
                b_text.innerHTML = quesitonsAll[currentQuestion+ 1][1]
                c_text.innerHTML = quesitonsAll[currentQuestion+ 1][2]
                d_text.innerHTML = quesitonsAll[currentQuestion+ 1][3]

                contNumNext++
            } 
            
            
        })
        console.log(selectedAnswers)
        console.log(quesitonsAll)
        finishQuestions.addEventListener('click', () => {

        })
    }
}