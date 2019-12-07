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
let questionNumber = `<output role="header" class="info js-question-number" value="num"> Question Number ${number+1} </output>`;

let questionsCorrect = `<output role="header" class="info js-answers-correct">Answers correct 0/0 </output>`;
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
        function renderOneAnswerSet(index) {//generateAnswerElement
                let answerSet = answers[index];
        console.log(`answerSet is ${answerSet}`);      
                return answerSet;
            }
        
        function generateQuestionSet(number) {
            let answer = renderOneAnswerSet(number);
        console.log(`answer is ${answer}`);
        //     let question = renderOneQuestion(number);
        // console.log(`question is ${question}`)
            let questionsSet = `<h4>${questions[number]}</h4>`
            // questionsSet.join("");
        console.log(`questionsSet is ${questionsSet}`); 

            let answersSet = answer.map((answers) =>{
                return `<label>${answers}</label>`})
            answersSet.join("");
            console.log(`answersSet is ${answersSet}`)

            let questionSet = `
            ${questionsSet}
            ${answersSet}       
            `
            $(".js-button-start").click(function(event) {
                event.preventDefault();
            // $(".js-question-set").toggle();
            $(".js-question-set").html(questionSet);
            });

        console.log(`questionSet is ${questionSet}`)
            return questionSet;
        }
        function showNextQuestion(questionNumber) {
            let nextQuestion = generateQuestionSet(questionNumber);
            console.log(`nextQuestion is ${nextQuestion}`)
            // $(".js-question-set").text(nextQuestion);
            return nextQuestion;
        }
    console.log(`generateQuestionSet returns:`)
        generateQuestionSet(number);
    console.log(`renderOneQuestion returns:`)
        renderOneQuestion(number);
    console.log(`renderOneAnswerSet returns: `)
        renderOneAnswerSet(number)
        handleNextButton(number);
        handleStartButton();
console.log(`showNextQuestion returns: ${showNextQuestion(0)}`);

        

        function handleNextButton(number) {
            $(".js-button-next").click(function(event) {
                event.preventDefault();
                console.log(`number is  ${number}`)
                number++;
                questionNumber = `<output role="header" class="info js-question-number" value="num"> Question Number ${number+1} </output>`;
                $(".js-question-number").html(`${questionNumber}`);
                $(".js-answers-correct").html(`${questionsCorrect}`)
                // $("legend").text(test);
                let questionSet = showNextQuestion(number);
                $(".js-question-set").html(questionSet);
                console.log(`number is now ${number}`);
                
            });
    }

//when START button clicked, START button hides, SUBMIT and NEXT button display
    function handleStartButton() {
        // let questionNumber = `<output role="header" class="info js-question-number" value="num"> Question Number ${number+1} </output>`;
        // let questionsCorrect = `<output role="header" class="info js-answers-correct">Answers correct 0/0 </output>`;
        
        // let questionSet = generateQuestionSet(number);
        $(".js-button-start").click(function(event) {
            event.preventDefault();
            $(".js-start-screen").toggle();
            $(".js-main-screen").toggle();
            
            $(".js-question-number").html(`${questionNumber}`);
            $(".js-answers-correct").html(`${questionsCorrect}`);
            // $("h2").append(`${questionNumber}`);
            // $(".js-question-number").append(`<output role="header" class="js-main-screen js-question-number" value="num"> ${number+1} </output>`);
        });
        
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
//returnQuestionAtI() returns a question at the specified index, i.e., `NUMBER` 
      
    function restartQuiz() {
        
    };
    

// returnQuestionAtI(0);
function handleQuiz() {

    restartQuiz();

    // showFeedback();
    // showNextQuestion();
    // showQuestionNumber();
    // handleNextButton(number);
    // generateQuestionSet(number);
    // renderOneQuestion();
    // renderAnswerSet();
    renderQuestionSet();
    // handleStartButton();
    // startQuiz();
    
}

             
$(handleQuiz);

