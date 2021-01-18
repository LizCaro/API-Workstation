export default class results{
    static countAnswers(){
        let selectedAnswers = [];
        let currentQuestion = 0;
        let contNumNext = 1;
        const nextQuestions = document.getElementById('next-questions');
        const quesitonsAll=[];
        //const questionItem =document.getElementById('question-item');

        nextQuestions.addEventListener('click', () => {
            currentQuestion++;
            const rbs = document.querySelectorAll('input[name="answer"]')
            let selecetValue;
            for (const rb of rbs){
                if(rb.checked) {
                    document.getElementById('a').setAttribute('value', a_text.innerText)
                    document.getElementById('b').setAttribute('value', b_text.innerText)
                    document.getElementById('c').setAttribute('value', c_text.innerText)
                    document.getElementById('d').setAttribute('value', d_text.innerText)
                    selecetValue = rb.value;
                    selectedAnswers.push(selecetValue);//Array select answers
                    console.log(selectedAnswers)       //Printing
                    rb.checked = false;
                }
            }

            const totalQuestions = document.getElementById('total-questions').value;
            if (contNumNext === totalQuestions - 1) { //Activacion de boton para finalizar
                const finishBtn = document.getElementById('finishButton');
                finishBtn.classList.remove('d-none');
                nextQuestions.classList.add('d-none');
                //nextQuestions.innerText = 'Finish';//Chnage button
            }
            questionItem.innerText = quesitonsAll[currentQuestion++ + 1]; 

            if (a_text.innerText = quesitonsAll[currentQuestion+ 1]) {
                a_text.innerText = quesitonsAll[currentQuestion+ 1][0]
                b_text.innerText = quesitonsAll[currentQuestion+ 1][1]
                c_text.innerText = quesitonsAll[currentQuestion+ 1][2]
                d_text.innerText = quesitonsAll[currentQuestion+ 1][3]
                contNumNext++
            } 
            else {
                alert('finish')//End quiz 
                /*let score=0;
                for(let i=0; i<selectedAnswers.length; i++){//Compara los array (correct_answers y selectedAnswers)
                    for(let j=0; j<corrrect_answers.length;j++){
                        if(selectedAnswers[i] === corrrect_answers[i]){
                            score = score + 1;
                        }
                    }
                }
                return score;*/
            }
        });
        
        console.log(selectedAnswers)
        return selectedAnswers;  
    }
}