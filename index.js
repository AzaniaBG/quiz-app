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
generateQuestionSet(number)
let questionSet = generateQuestionSet(number);

let questionNumber = `<output role="header" class="info js-question-number" value="num"> Question Number ${number+1} </output>`;

let questionsCorrect = `<output role="header" class="info js-answers-correct">Answers correct 0/0 </output>`;
// console.log(`answers is ${answers}`);
//create a question set from global variable QUESTIONS (line 69) and ANSWERS (line 75) 
    function handleQuiz() {
    
        if(number < 5) {
            startQuiz();
        } else {
            showResultsScreen();
        }
              
    }
//when START button clicked, START button hides, SUBMIT and NEXT button display 
    function handleStartButton() {
            $(".js-button-start").click(function(event) {
                event.preventDefault();
                $(".js-start-screen").toggle();
                $(".js-main-screen").toggle();
                
                $(".js-question-number").html(`${questionNumber}`);
                $(".js-answers-correct").html(`${questionsCorrect}`);
            });       
        }

    function showResultsScreen() {
    //if QUESTION NUMBER <= 5 && ANSWER = correct, show correct
    // console.log(`showResultsScreen is:`);
    //if QUESTION NUMBER <= 5 && ANSWER = incorrect, show incorrect

    //if QUESTION NUMBER === 5 && ANSWER feedback provided, show RESULTS
        let results = $("legend.js-results-screen").html();
    // console.log(`results is ${results}`)
        
        $(".js-question-set").toggle();
        $(".js-results-screen").toggle();
        
    }

    function renderOneQuestion(index) {
        let question = questions[index];
    // console.log(`question is ${question}`);
        return question;         
    } 
//create an answer set from global variable ANSWERS (line 75) and pass in NUMBER (line 67) as the index 
    function renderOneAnswerSet(index) {//generateAnswerElement
            let answerSet = answers[index];
        console.log(`answerSet is ${answerSet}`);      
            return answerSet;
        }  
//create a question set from global variable QUESTIONS (69) and pass in NUMBER (line 67) as the index  
    function generateQuestionSet(number) {
        let answer = renderOneAnswerSet(number);
    // console.log(`answer is ${answer}`);
            let questionsSet = 
            `<h4 role="" class="form js-question-set" id="js-question${number}"> ${questions[number]}</h4>`
    // console.log(`questionsSet is ${questionsSet}`); 

            let answersSet = answer.map((answers) =>{
                return `<input role="" class="radio js-question-set js-button-index0" type="radio" name="options" value="0" checked id="index0">
                <label for="index0" class="radio js-question-set js-button-index0" lang="es"> </label>
                <button role="button" class="button js-question-set js-button-index0"> ${answers} </button>
                <br>`
                
            })
            answersSet.join("");
    // console.log(`answersSet is ${answersSet}`)
            let questionSet = `
            ${questionsSet}
            ${answersSet}       
            `
            $(".js-button-start").click(function(event) {
                event.preventDefault();
            // $(".js-question-set").toggle();
            $(".js-question-set").html(questionSet);
            });

    //console.log(`questionSet is ${questionSet}`)
            return questionSet;
        }
   
    function handleNextButton(number) {
        // checkQuestionSet(number);
        $(".js-button-next").click(function(event) {
            event.preventDefault();
            number++;
            checkQuestionSet(number);
            if(number < 5) {           
            // checkQuestionSet(number)
            questionNumber = `<output role="header" class="info js-question-number" value="num"> Question Number ${number+1} </output>`;
            $(".js-question-number").html(`${questionNumber}`);
            $(".js-answers-correct").html(`${questionsCorrect}`)
            // $("legend").text(test);
            showNextQuestion(number);
            let questionSet = showNextQuestion(number);
            $(".js-question-set").html(questionSet);              
            // console.log(`number is now ${number}`);   
        } else {

            showResultsScreen();
            // let results = $("legend.js-results-screen").html();
            // console.log(`results is ${results}`)

            $(".js-button-next").click(function(event) {
                event.preventDefault();
                // // number = 0;
                questionNumber = `<output role="header" class="info js-question-number" value="num"> Question Number ${0} </output>`;
                $(".js-final-callout-header").toggle();
                $(".js-question-set").toggle();
                $(".js-question-number").toggle();
                showResultsScreen();
                    });
                };   

            });
    }

    function showNextQuestion(questionNumber) {
        let nextQuestion = generateQuestionSet(questionNumber);
    // console.log(`nextQuestion is ${nextQuestion}`)
            return nextQuestion;
    }

    function checkQuestionSet(number) {
        if(number <= 5) {
            // number++;
            $(".js-button-next").click(function(event) {
            event.preventDefault();
            // number++;
            showNextQuestion(number);
            // showResultsScreen();
            });
            // number++
            
        } else {
            $(".js-button-restart").toggle();
            $(".js-start-screen").toggle();
            $("results").toggle();
            // showResultsScreen();
            // number = 0;
            // $(".js-button-next").click(function(event) {
            // event.preventDefault();
            // // showResultsScreen();
            // // number = 0;
            // // showResultsScreen();
            // // $("results").toggle();
            // });
        }
    }  
    // function showFeedback(answer) {
    //     // let correctAnswer = this.options["option2"];
    //     // if(answer === correctAnswer) {        
    //     //     return `Great! "${correctAnswer}" is correct;`
    //     // } else {
    //     //     return `Oops! "${correctAnswer}" is the correct answer.`
    //     // }
    // }

    function restartQuiz() {
        
    };

    function handleQuiz() {

    restartQuiz();
    // showResultsScreen();
    // showFeedback();
    checkQuestionSet(number);
    showNextQuestion(number);
    // showQuestionNumber();
    handleNextButton(number);
    // generateQuestionSet(number);
    renderOneQuestion(number);
    renderOneAnswerSet(number);
    // renderQuestionSet();
    generateQuestionSet(number);
    handleStartButton();
    startQuiz();
    
}

             
$(handleQuiz);

