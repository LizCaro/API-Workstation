export default class UI {
    static printCategories(categories){
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static printQuestions(answers){
        const questionItem =document.getElementById('question-item');
        const a_text =document.getElementById('a_text');
        const b_text =document.getElementById('b_text');
        const c_text =document.getElementById('c_text');
        const d_text =document.getElementById('d_text');
        const nextQuestions = document.getElementById('next-questions');
        const finishQuestions = document.getElementById('finish-questions');
        const results = document.getElementById('results');
        const totalQuestions = document.getElementById('total-questions').value;
        const showScore = document.getElementById('results');
        
        const showQuestion = document.getElementById('question-container');
        const showButtons = document.getElementById('buttonsBlock');
        const messageInit = document.getElementById('initial-message');
        const start = document.querySelector("#start");
        start.addEventListener("click", () => {
            showQuestion.style.display = 'inline-block'
            showButtons.style.display = 'inline-block'
            messageInit.style.display = 'none'
        }) 
    
        let quesitonsAll = []
        let correct = []

            answers.forEach((element) => {
                const questionsChoices = element.question
                const answerChoices = [...element.incorrect_answers]
                const corrected = element.correct_answer
                
                answerChoices.splice(Math.floor(Math.random() * 4) - 1, 0, element.correct_answer)
    
                correct.push(corrected)
                quesitonsAll.push(questionsChoices)
                quesitonsAll.push(answerChoices)
    
            })
        
        for (let i = 0; i < quesitonsAll.length; i++) {
                questionItem.innerHTML = quesitonsAll[0]
                a_text.innerHTML = quesitonsAll[1][0]
                b_text.innerHTML = quesitonsAll[1][1]
                c_text.innerHTML = quesitonsAll[1][2]
                d_text.innerHTML = quesitonsAll[1][3]   
        } 

        let points = 0
        let selectedAnswers = []
        let currentQuestion = 0;
        let contNumNext = 1;
        nextQuestions.addEventListener('click', () => {
            currentQuestion++
            const rbs = document.querySelectorAll('input[name="answer"]')
            let selecetValue;

            
            for (const rb of rbs) {
                if(rb.checked) {
                document.getElementById('a').setAttribute('value', a_text.innerText)
                document.getElementById('b').setAttribute('value', b_text.innerText)
                document.getElementById('c').setAttribute('value', c_text.innerText)
                document.getElementById('d').setAttribute('value', d_text.innerText)
                selecetValue = rb.value
                selectedAnswers.push(selecetValue)
                //console.log(selectedAnswers)
                // rb.checked = false;
                }
            }
            
            if (contNumNext === totalQuestions - 1) {
                nextQuestions.style.display = 'none'
                finishQuestions.style.display = 'inline-flex'
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

            let score=0;
            for (let i = 0; i < selectedAnswers.length; i++) {
                for (let j = 0; j < correct.length; j++) {
                    if (selectedAnswers[i] === correct[j]) {
                        points += 1
                    }
                }
            }
            score = score + (points*100)/selectedAnswers.length;

            showScore.style.display = 'inline-block'
            showQuestion.style.display = 'none'
            showButtons.style.display = 'none'
            results.innerHTML = `You get ${points} correct answers of ${totalQuestions} and you score is ${score} %`
        })
    }
}