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
        
        

        let quesitonsAll = []

        answers.forEach((element) => {
            const questionsChoices = element.question
            const answerChoices = [...element.incorrect_answers]
            
            answerChoices.splice(Math.floor(Math.random() * 4) - 1, 0, element.correct_answer)
            quesitonsAll.push(questionsChoices)
            quesitonsAll.push(answerChoices)

        })
        
        for (let i = 0; i < quesitonsAll.length; i++) {
                questionItem.innerText = quesitonsAll[0]
                a_text.innerText = quesitonsAll[1][0]
                b_text.innerText = quesitonsAll[1][1]
                c_text.innerText = quesitonsAll[1][2]
                d_text.innerText = quesitonsAll[1][3]   
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
                document.getElementById('a').setAttribute('value', a_text.innerText)
                document.getElementById('b').setAttribute('value', b_text.innerText)
                document.getElementById('c').setAttribute('value', c_text.innerText)
                document.getElementById('d').setAttribute('value', d_text.innerText)
                selecetValue = rb.value
                selectedAnswers.push(selecetValue)
                console.log(selectedAnswers)
                // rb.checked = false;
                
                }
            }
            const totalQuestions = document.getElementById('total-questions').value;

            if (contNumNext === totalQuestions - 1) {
                nextQuestions.innerText = 'Finish'
            }

            questionItem.innerText = quesitonsAll[currentQuestion++ + 1];    
            
            if (a_text.innerText = quesitonsAll[currentQuestion+ 1]) {
                a_text.innerText = quesitonsAll[currentQuestion+ 1][0]
                b_text.innerText = quesitonsAll[currentQuestion+ 1][1]
                c_text.innerText = quesitonsAll[currentQuestion+ 1][2]
                d_text.innerText = quesitonsAll[currentQuestion+ 1][3]

                contNumNext++
            } else {
                alert('finish')
            }
            
            
        })
        console.log(selectedAnswers)
        console.log(quesitonsAll)
    }
}