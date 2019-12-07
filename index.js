'use strict'
const QUIZ = [
           {
            id: "js-question1",
            question: "How are you (informal)?",
            number: 1,
            answers: [
            "¿Como estas?",
             "¿Cómo estás?",
             "¿Cómo eres?",
             "¿Qué cómo?"],
            answer: 1,
            
        },

        {
            id: "js-question2",
            question: "What are you doing (formal)?",
            number: 2,
            answers: [
                "¿Qué haga?",
                "¿Qué haces?",
                "¿Qué haciendo?",
                "¿Qué está haciendo?"],
            answer: 3,
        },
        
        {
            id: "js-question3",
            question: "What have you done (informal)?",
            number: 3,
            answers: [
                "¿Qué has hecho?",
                "¿Qué ha hecho?",
                "¿Qué has hace?",
                "¿Qué habían hecho?"],
            answer: 0,
        },
        
        {
            id: "js-question4",
            question: "What were you cooking (informal)?",
            number: 4,
            answers: [
                "¿Qué estás cocinando?",
                "¿Qué cocinas?",
                "¿Qué cocinaba?",
                "¿Qué cocinabas?"],
            answer: 3,
        },
        
        {
            id: "js-question5",
            question: "When will you visit (informal)?",
            number: 5,
            answers: [
                "¿Cuándo visitaré?",
                "¿Cuándo visitará?",
                "¿Cuándo visitarás?",
                "¿Cuándo vas a venir?"],
            answer: 2,
        },

]


let number = 0;
//QUESTIONS returns an array of all questions from the QUIZ data model
let questions = QUIZ.map(quiz => {        
    return quiz.question;
});
// console.log(`questions is ${questions}`);
// console.log(typeof questions);

//ANSWERS returns an array of objects
let answers = QUIZ.map(quiz =>{ 
    return quiz.answers; 
});
// console.log(`answers is ${answers}`);

    function renderQuestionSet() {
        //create a question set from global variable QUESTIONS (line 69) and ANSWERS (line 75)
        
        function renderOneQuestion(index) {
            let question = questions[index];
            console.log(`question is ${question}`);
            let questionElement = `<h4>${question}</h4>`
            return questionElement;         
        }

console.log(`renderOneQuestion returns:`)
renderOneQuestion(number);
// generateQuestionElement();
        function renderAnswerSet(answers) {
        //each answer is a set of 4 answers:
                let answer = answers.map((answer) => {
                // console.log(`answer is: ${answer}`)
                    return answer;
                });
                return answer;
            }
        
        function renderOneAnswerSet(index) {
            let answerSet = answers[index];
            console.log(`answerSet is ${answerSet}`);
             
            return answerSet;

        }

console.log(`renderAnswerSet returns:`);
    renderAnswerSet(answers);
console.log(`renderOneAnswerSet returns: `)
    renderOneAnswerSet(number)
    }

//when START button clicked, START button hides, SUBMIT and NEXT button display
    function handleStartButton() {

        $(".js-button-start").click(function(event) {
            event.preventDefault();
            $(".js-start-screen").toggle();
            $(".js-main-screen").toggle();
        });
    }

    function handleNextButton() {
        //show next Question Number
        //show questions correct
        //show next question set
    }
    
    // function showFeedback(answer) {
    //     // let correctAnswer = this.options["option2"];
    //     // if(answer === correctAnswer) {        
    //     //     return `Great! "${correctAnswer}" is correct;`
    //     // } else {
    //     //     return `Oops! "${correctAnswer}" is the correct answer.`
    //     // }
    // }
//returnQuestionAtI() returns a question at the specified index, i.e., `NUMBER` 
    
    
    function restartQuiz() {
        
    };
    

// returnQuestionAtI(0);
function handleQuiz() {

    restartQuiz();

    // showFeedback();

    // showQuestionNumber();
    handleNextButton();
    // renderOneQuestion();
    // renderAnswerSet();
    renderQuestionSet();
    handleStartButton();
    // startQuiz();
    
}

             
$(handleQuiz);

