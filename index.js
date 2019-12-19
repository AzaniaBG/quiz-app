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
// generateQuestionSet(number)
let questionSet = generateQuestionSet(number);
let correctAnswer = QUIZ[number].answer;
console.log(`correctAnswer is ${correctAnswer}`);
let correctAnswerString = QUIZ[number].answers[correctAnswer];
let questionNumber = 
`<h3 role="header" class="questions-screen-header js-question-number"> Question Number ${number+1} </h3>`
let correctAnswersHeader = 0;
let questionsCorrect = 
`<h3>
    <output role="header" number="0" class="questions-screen-header js-answers-correct">Answers correct ${correctAnswersHeader}/5 </output>
    <progress value="0" > 0/5 </progress>
</h3>`;
// console.log(`answers is ${answers}`);
//create a question set from global variable QUESTIONS (line 69) and ANSWERS (line 75) 
///////////////////////////////////////////////////// END GLOBAL VARIABLES /////////////////////////////////////
    function handleQuiz() { 
        if(number === 0) {
            startQuiz();
        } else if(number >5) {
            handleNextButton();

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

        $("#js-start-button").on("click", function(event) {

            event.preventDefault();
            showNextQuestion(number);
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
    console.log(`answer is ${answer}`);
    // console.log(`questionsSet is ${questionsSet}`); 

            
            //answersSet.join(" ");
    
    // console.log(`answersSet is ${answersSet}`)
            let questionSet = `<fieldset>
            <legend id="question-set-legend"> </legend>
            <br>
            <h3 role="" class="form js-question-set" id="js-question-${number}"> 
            ${questions[number]}</h3>`

            answer.map((answers, index) =>{
            questionSet += `<fieldset class="form js-question-set">
                <input role="" tabindex="${index}" id="${index}" class="radio js-question-set js-button-index0" type="radio" name="options" value="${index}" required>
                <label for="${index}" tabindex="${index}" class="radio js-question-set js-button-${index}" lang="es">${answers}</label>
                </fieldset>`               
            })

            questionSet += `<button role="button" type="submit" id="question-submit-button" class="button js-question-set"> SUBMIT  </button><br>
            </fieldset>`
    //console.log(`questionSet is ${questionSet}`)
            return questionSet;
        }

    function renderQuestionSet() {
        $("#questions-screen-header").append(questionNumber);
        $("#questions-screen").html(questionSet);
    }

    function handleSubmitButton() {
        $("#questions-screen").on("click", "#question-submit-button", function(event) {
            event.preventDefault();
            let answerValue = $("input[name=options]:checked").val();
            if(!answerValue) {
                $("#callout-box").show();
                $("#question-submit-button").on("click", function(event) {
                    $("#callout-box").hide();
                })  
                
            } else {
                handleFeedback(answerValue, number)
            };           
        });
       
    }
    function showNextQuestion(questionNumber) {
        let nextNumber = questionNumber
        $("#questions-screen-header").show();
        $("#questions-screen").show();
        $("#feedback-screen").hide();
        
        let nextQuestionHeader = `<h3 role="header" class="questions-screen-header js-question-number"> 
        <output> Question Number ${nextNumber+1} </output>
        <br><output role="header" number="0" class="questions-screen-header js-answers-correct">Answers correct ${correctAnswersHeader}/5 </output>
        </h3>`
    //console.log(`questionNumber is ${questionNumber}`);
        questionSet = generateQuestionSet(questionNumber);
    // console.log(`nextQuestion is ${nextQuestion}`)
        $("#questions-screen-header").html(nextQuestionHeader);
        $("#questions-screen").html(questionSet);  
        correctAnswer = QUIZ[questionNumber].answer;
        correctAnswerString = QUIZ[questionNumber].answers[correctAnswer];
    //console.log(`questionNumber is now ${questionNumber}`);
    }
    
    function handleFeedback(answerValue, questionNumber) {
        
        $("#feedback-screen").show();
        $("#questions-screen-header").hide();
        $("#questions-screen").hide();
        
    console.log(`correctAnswer is ${correctAnswer}`)
        
        let feedback;
        if (answerValue == correctAnswer) {
            correctAnswersHeader += 1;
            feedback = 
        `<div class="feedback js-results-feedback">
        <img id="correct" src="https://previews.123rf.com/images/arcady31/arcady311812/arcady31181200164/114186087-happy-nerd-emoji.jpg" alt="ecstatic face with glasses">
        <aside> <h2> MUY BIEN!<br>The correct answer is</h2> 
            <p class="correct"> ${correctAnswerString}</p>
        </aside>
        <button type="submit" id="js-feedback-next-button" class="button js-results-feedback"> NEXT </button></div>
        `
        } else {
            feedback =
        `<div class="feedback js-results-feedback">
        <img id="incorrect" src="https://i1.wp.com/bigtechquestion.com/wp-content/uploads/2018/09/Emoji.png?w=1000&ssl=1" alt="oh no emoji face">
        <aside> <h2> ¡Ay Caramba!<br>The correct answer is</h2>    
        </aside>
        <p class="correct"> ${correctAnswerString}</p>
        <button type="submit" id="js-feedback-next-button" class="button js-results-feedback"> NEXT </button></div>
        `
        }
        $("#feedback-screen").html(feedback);     
    }
        function renderQuestionSetHeader(number) {
            if(number = 0) {
            questionNumber = 
            `<h3 role="header" class="questions-screen-header js-question-number"> Question Number 1 </h3>` 
            } else {
            questionNumber = 
            `<h3 role="header" class="questions-screen-header js-question-number"> Question Number ${number+1} </h3>` 
            }
        }
    function handleNextButton(number) {
        $("#feedback-screen").on("click", "#js-feedback-next-button", function(event) {
            event.preventDefault();
            number++;          
            renderQuestionSetHeader(number);
            
            if(number < 5) {     
               
            showNextQuestion(number);
            
        } else {
            
            showFinalScoreScreen();
            number = 0;
                };   
            });
        // return number;
    }

    function showFinalScoreScreen() {  
        let finalScore = `<h2> Final Score:<br>${correctAnswersHeader} Answers Correct </h2>`;      
            $("#questions-screen").hide();
            $("#feedback-screen").hide();
            $("#questions-screen-header").hide();
            $("#finalscore-screen").show();
            $("#finalscore-screen h4").html(finalScore); 
        }

    function restartQuiz() {
        $("#finalscore-screen").on("click", "#js-restart-button", function(event) {
            correctAnswersHeader = 0;
            $("#finalscore-screen").hide();
            $("#start-screen").show();
            // number = 0;
            startQuiz();   
        })
        
        
    };

    function handleQuiz() {

    restartQuiz();
    handleSubmitButton();
    handleNextButton(number);
    renderOneQuestion(number);
    renderOneAnswerSet(number);
    renderQuestionSet();//may need to require parameter?
    generateQuestionSet(number);
    // handleStartButton(); why don't i need to call this here ?
    startQuiz();
    
}

             
$(handleQuiz);

