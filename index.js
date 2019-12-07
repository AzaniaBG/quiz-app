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

//NUMBER is used to specify the index for question sets and to show the question number
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
//create a question set from global variable QUESTIONS (line 69) and ANSWERS (line 75) 
    function renderQuestionSet() {
    //create a question set from global variable QUESTIONS (69) and pass in NUMBER (67) as the index  
        function renderOneQuestion(index) {
            let question = questions[index];
            // console.log(`question is ${question}`);
            // let questionElement = `<h4>${question}</h4>`
            return question;         
        }
        
//create an answer set from global variable ANSWERS (line 75) and pass in NUMBER (line 67) as the index 
        function renderOneAnswerSet(index) {
                let answerSet = answers[index];
        // console.log(`answerSet is ${answerSet}`);         
                return answerSet;
            }

        function generateQuestionSet(number) {
            let answer = renderOneAnswerSet(number);
            console.log(`answer is ${answer}`);
            let oneQuestion = renderOneQuestion(number);

            let questionSet = `
            <h4 role="" class="form js-main-screen js-question-set" id="js-question${number}">${oneQuestion}</h4>
            <input role="" class="radio js-button-index0" type="radio" name="options" value="0" checked id="index0">
            <label for="index0" class="radio js-button-index0" lang="es"> </label>
            <button role="button" class="button js-main-screen js-button-index0"> ${answer[0]}</button>
            <br>
            <input role="" class="radio js-button-index1" type="radio" name="options" value="1" checked id="index1">
            <label for="index1" class="radio js-button-index1" lang="es"> </label>
            <button role="button" class="button js-main-screen js-button-index1"> ${answer[1]}</button>
            <br>
            <input role="" class="radio js-button-index2" type="radio" name="options" value="2" checked id="index2">
            <label for="index2" class="radio js-button-index2" lang="es"> </label>
            <button role="button" class="button js-main-screen js-button-index2"> ${answer[2]}</button>
            <br>
            <input role="" class="radio js-button-index2" type="radio" name="options" value="2" checked id="index2">
            <label for="index3" class="radio js-button-index3" lang="es"> </label>
            <button role="button" class="button js-main-screen js-button-index3"> ${answer[3]}</button>
            `
            $(".js-button-start").click(function(event) {
                event.preventDefault();
            $(".js-question-set").html(questionSet);
            });

        console.log(`questionSet is ${questionSet}`)
            return questionSet;
        }


    console.log(`generateQuestionSet returns:`)
        generateQuestionSet(number);
    console.log(`renderOneQuestion returns:`)
        renderOneQuestion(number);
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
    //generateQuestionSet();
    // renderOneQuestion();
    // renderAnswerSet();
    renderQuestionSet();
    handleStartButton();
    // startQuiz();
    
}

             
$(handleQuiz);

