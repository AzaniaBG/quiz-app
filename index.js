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
//ANSWERS returns an array of objects
let answers = QUIZ.map(quiz =>{ 
    return quiz.answers; 
});
generateQuestionSet(number)
let questionSet = generateQuestionSet(number);
             
let questionNumber = number+1;
let questionsCorrect = `<output role="header" class="js-questions-screen-header js-answers-correct">Answers correct 0/${number} </output>`;
// console.log(`answers is ${answers}`);
//create a question set from global variable QUESTIONS (line 69) and ANSWERS (line 75) 
///////////////////////////////////////////////////// END GLOBAL VARIABLES /////////////////////////////////////
    function handleQuiz() { 
        if(number < 5) {
            startQuiz();
        } else {
            showFinalScoreScreen();
        }             
    }

    function startQuiz() {
        $("#questions-screen-header").hide();
        $("#questions-screen").hide();
        $("#feedback-screen").hide();
        $("#finalscore-screen").hide();

        handleStartButton();    
    }
//when START button clicked, START button hides, SUBMIT and NEXT button displays 
    function handleStartButton() {

        $(".js-start-button").on("click", function(event) {
            event.preventDefault();
            $("#start-screen").hide();
            $("#questions-screen-header").show();
            $("#questions-screen").show();
        }); 
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
         
    // console.log(`questionsSet is ${questionsSet}`); 

            let answersSet = answer.map((answers) =>{
                return `
                <input role="" class="radio js-question-set js-button-index0" type="radio" name="options" value="0" checked id="index0">
                <label for="index0" class="radio js-question-set js-button-index0" lang="es">${answers}</label>              
                <br>
                `               
            })
            answersSet.join("");
    // console.log(`answersSet is ${answersSet}`)
            let questionSet = `
            <h4 role="" class="form js-question-set" id="js-question-${number}"> ${questions[number]}</h4>
            <button role="button" type="button" id="question-submit-button" class="js-question-set"> SUBMIT  </button><br>
            ${answersSet}<br>
                   
            `
    //console.log(`questionSet is ${questionSet}`)
            return questionSet;
        }

    function renderQuestionSet() {
            
            $("#questions-screen").html(questionSet);
    }
    function handleSubmitButton() {
        $("#questions-screen").on("click", "#question-submit-button", function(event) {
            event.preventDefault();
            handleFeedback();  
        });
    }
    function showNextQuestion(questionNumber) {
        $("#questions-screen").show();
        $("#feedback-screen").hide();
        questionSet = generateQuestionSet(questionNumber);
    // console.log(`nextQuestion is ${nextQuestion}`)
        $("#questions-screen").html(questionSet);
    }
    
    function handleFeedback() {
        $("#feedback-screen").show();
        $("#questions-screen").hide();
        let feedback = `<button type="submit" id="js-feedback-next-button"> NEXT </button>`
        $("#feedback-screen").append(feedback);
        // if(answer===correct) {
        // let correctFeedback = `
        // <div class="callout feedback js-results-feedback js-callout-container">
        //     <aside class="callout feedback js-results-feedback js-callout-box">Answer feedback</aside>
        //     <output class="callout feedback js-results-feedback js-correct-callout-header">Correct!</output> 
        // <img src="https://previews.123rf.com/images/arcady31/arcady311812/arcady31181200164/114186087-happy-nerd-emoji.jpg" alt="ecstatic face with glasses">          
        //     <span class="callout js-results-feedback js-callout-close" onclick="this.parentElement.style.display='none';">&times</span>
        //     <p class="callout js-results-feedback js-correct-callout-header">explanation</p>
        //     <button role="button" class="feedback js-feedback-next-button"> NEXT</button>
        // </div>`
        // $("#feedback-screen").html(correctFeedback)
    
        // } else {   
        //     let incorrectFeedback = `
        //     <div class="callout js-results-feedback js-callout-container">
        //         <aside class="callout feedback js-results-feedback js-callout-box">Answer feedback</aside>
        //         <output class="callout feedback js-results-feedback js-incorrect-callout-header">Oops!</output>                     
        //     <img src="https://cdn.imgbin.com/10/20/25/imgbin-emoticon-oh-no-emoticon-illustration-eMDxaTxNca7euDSwfMZSmkLsb.jpg" alt="oh no emoji face"> 
        //         <span class="callout js-results-feedback js-callout-close" onclick="this.parentElement.style.display='none';">&times</span>       
        //             <p class ="callout js-results-feedback js-incorrect-callout-header">explanation</p>
        //         <button role="button" class="callout feedback js-feedback-next-button"> NEXT</button>
        //     </div>`
        //     $("#feedback-screen").html(incorrectFeedback)
        // }       
    }
    function handleNextButton(number) {
        $("#feedback-screen").on("click", "#js-feedback-next-button", function(event) {
            event.preventDefault();
            number++;
            if(number < 5) {           
            showNextQuestion(number);
            
        } else {
            showFinalScoreScreen();
                };   

            });
    }

    function showFinalScoreScreen() {          
            $("#questions-screen").hide();
            $("#finalscore-screen").toggle();         
        }

    function checkQuestionSet(number) {
        
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
        $(".js-restart-button").on("click", function(event) {
            $("#start-screen").show();
        })
        
        
    };

    function handleQuiz() {

    restartQuiz();
    // showFeedback();
    checkQuestionSet(number);
    // showNextQuestion(number);
    // showQuestionNumber();
    handleSubmitButton();
    handleNextButton(number);
    // generateQuestionSet(number);
    renderOneQuestion(number);
    renderOneAnswerSet(number);
    renderQuestionSet();
    generateQuestionSet(number);
    // handleStartButton(); why don't i need to call this here ?
    startQuiz();
    
}

             
$(handleQuiz);

