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

//QUESTIONS returns an array of all questions from the QUIZ data model
let questions = QUIZ.map(item => {        
    return item.question;
});
// console.log(`questions is ${questions}`);

//ANSWERS returns an array of objects
let answers = QUIZ.map(item =>{ 
    return item.options 
});
// console.log(`answers is ${answers}`);

//NUMBER is INDEX used for functions: 1) returnQuestionAtI() 2) returnAnswers(number)
let number = 0;

//NUM is used to determine the question number user is on



    
    
    // function showQuestionNumber() {

    // }
//when START button clicked, START button hides, SUBMIT and NEXT button display
    function handleStartButton() {

        $(".js-button-start").click(function(event) {
            event.preventDefault();
            $(".js-start-screen").toggle();
            $(".js-main-screen").toggle();
        })

        //hide START page content


    }
    function handleNextButton() {

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
    handleStartButton();
    // startQuiz();
    
}

             
$(handleQuiz);

