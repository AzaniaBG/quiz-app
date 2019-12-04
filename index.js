'use strict'
const QUIZ = [
           {
            id: "js-question1",
            question: "How are you (informal)?",
            number: 1,
            options: {
                option1: "¿Como estas?",
                option2: "¿Cómo estás?",
                option3: "¿Cómo eres?",
                option4: "¿Qué cómo?"
            },
            answer: "option2",//refers to `options` index ("¿Cómo estás?")
            selected: null,//need to toggle `selected` class
            feedback: function(answer) {
                let correctAnswer = this.options["option2"];
                if(answer === null) {
                    return "Please select an answer."
                } else if(answer === correctAnswer) {
                    return `Great! "${correctAnswer}" is correct; "estar" is the correct verb to use here. Note that "esta" without an accent means "this".`
                } else {
                    return `Oops! "${correctAnswer}" is the correct answer.`
                }
            }
        },

        {
            id: "js-question2",
            question: "What are you doing (formal)?",
            number: 2,
            options: {
                option1: "¿Qué haga?",
                option2: "¿Qué haces?",
                option3: "¿Qué haciendo?",
                option4: "¿Qué está haciendo?"
            },
            answer: "option4",//refers to `options` index ("¿Cómo estás?")
            selected: null,//need to toggle `selected` class
            feedback: function(answer) {
                let correctAnswer = this.options["option4"];
                if(answer === null) {
                    return "Please select an answer."
                } else if(answer === correctAnswer) {
                    return `Great! "${correctAnswer}" is correct. You can also say, “¿Qué haces?”.`
                } else {
                    return `Oops! "${correctAnswer}" is the correct answer.`
                }
            }
        },
        
        {
            id: "js-question3",
            question: "What have you done (informal)?",
            number: 3,
            options: {
                option1: "¿Qué has hecho?",
                option2: "¿Qué ha hecho?",
                option3: "¿Qué has hace?",
                option4: "¿Qué habían hecho?"
            },
            answer: "option1",//refers to `options` index ("¿Cómo estás?")
            selected: null,//need to toggle `selected` class
            feedback: function(answer) {
                let correctAnswer = this.options["option1"];
                if(answer === null) {
                    return "Please select an answer."
                } else if(answer === correctAnswer) {
                    return `Great! "${correctAnswer}" is correct. Note “hecho” is the past participle of the verb “hacer.”`
                } else {
                    return `Oops! "${correctAnswer}" is the correct answer.`
                }
            }
        },
        
        {
            id: "js-question4",
            question: "What were you cooking (informal)?",
            number: 4,
            options: {
                option1: "¿Qué estás cocinando?",
                option2: "¿Qué cocinas?",
                option3: "¿Qué cocinaba?",
                option4: "¿Qué cocinabas?"
            },
            answer: "option4",//refers to `options` index ("¿Cómo estás?")
            selected: null,//need to toggle `selected` class
            feedback: function(answer) {
                let correctAnswer = this.options["option4"];
                if(answer === null) {
                    return "Please select an answer."
                } else if(answer === correctAnswer) {
                    return `Great! "${correctAnswer}" is correct. The imperfect tense is used for ongoing events happening in the past, with no definitive time period`
                } else {
                    return `Oops! "${correctAnswer}" is the correct answer.`
                }
            }
        },
        
        {
            id: "js-question5",
            question: "When will you visit (informal)?",
            number: 5,
            options: {
                option1: "¿Cuándo visitaré?",
                option2: "¿Cuándo visitará?",
                option3: "¿Cuándo visitarás?",
                option4: "¿Cuándo vas a venir?"
            },
            answer: "option3",//refers to `options` index ("¿Cómo estás?")
            selected: null,//need to toggle `selected` class
            feedback: function(answer) {
                let correctAnswer = this.options["option3"];
                if(answer === null) {
                    return "Please select an answer."
                } else if(answer === correctAnswer) {
                    return `Great! "${correctAnswer}" is correct. You can also say, “¿Cuándo vas a visitar?`
                } else {
                    return `Oops! "${correctAnswer}" is the correct answer.`
                }
            }
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
let num = 1;

function handleQuiz() {
//returnQuestionAtI() returns a question at the specified index, i.e., `NUMBER` 
    function returnQuestionAtI() {
        let question = questions[`${number}`] ;
        // console.log(`question is ${question}`)
        return question;
    };
    // console.log(`returnQuestionAtI() returns ${returnQuestionAtI()}`)

//H4QUESTION updates based on NUMBER by using returnQuestionAtI() function
    let h4Question = `<h4>${returnQuestionAtI()}<h4>`; 
    // console.log(`h4Question is ${h4Question}`)

//returnAnswers(number) returns an array of answer options at the specified index, i.e., `NUMBER` (references global variable `ANSWERS`)
    function returnAnswers(number) { 
        console.log(`returnAnswers ran`) 
        let answer = answers[`${number}`]; 
        let answerArr = Object.values(answer);
        // console.log(`answerArr is ${answerArr} `) 
        
        return answerArr;
    } 
// returnAnswers(`${number}`); 
    // let answerSet = returnAnswers(`${number}`)

    function generateAnswerElement(answerSetIndex, index) { 
        // console.log(`generateAnswerElement ran`); 
        let answerSet = returnAnswers(answerSetIndex); 
        let answer = answerSet[index]; 
        console.log(`answerSet is ${answerSet}`)
        console.log(`answer is ${answer}`)
        return answer;
    } 
    generateAnswerElement(1, 0)
// console.log(`generateAnswerElement returns: ${generateAnswerElement(`${number}`, 3)}`); 
// `${number++}`;
// console.log(`generateAnswerElement returns: ${generateAnswerElement(`${number}`,1)}`); 

// number++
// generateAnswerElement(`${number}`, 1)
function generateAnswerSet(answerSetIndex) {
    
    let questionSetAtI = `
let option1 = <li role="listitem" class="form js-quiz-option1">
                <input role="button" class="radio js-button-option1" type="radio" name="options" value="option1" checked id="option1">
                <label for="option1" lang="es">${generateAnswerElement(`${answerSetIndex}`, 0)}<label>
                </li>; 
let option2 = <li role="listitem" class="form js-quiz-option2">
                <input role="button" class="radio js-button-option2" type="radio" name="options" value="option2" id="option2">
                <label for="option2" lang="es">${generateAnswerElement(`${answerSetIndex}`, 1)}</label>
                </li>; 
let option3 = <li role="listitem" class="form js-quiz-option3">
                <input role="button" class="radio js-button-option3" type="radio" name="options" value="option3" id="option3">
                <label for="option3" lang="es">${generateAnswerElement(`${answerSetIndex}`, 2)}</label>
                </li>; 
let option4 = <li role="listitem" class="form js-quiz-option4">
                <input role="button" class="radio js-button-option4" type="radio" name="options" value="option4" id="option4">
                <label for="option4" lang="es">${generateAnswerElement(`${answerSetIndex}`, 3)}</label>
                </li>;`
    // console.log(`questionSetAtI is ${questionSetAtI}`)
    return questionSetAtI;
}
let answerSet1 = generateAnswerSet(0);
console.log(`answerSet1 is ${answerSet1}`)
generateAnswerSet(1);
let answerSet2 = generateAnswerSet(1);
console.log(`answerSet2 is ${answerSet2}`)
let answerSet3 = generateAnswerSet(2);
console.log(`answerSet2 is ${answerSet3}`)
let answerSet4 = generateAnswerSet(3);
console.log(`answerSet2 is ${answerSet4}`)
// generateAnswerSet(1)
// console.log(`questionSetAtI is now  ${generateAnswerSet(1)}`)
// generateAnswerSet(`${number}`);
// number++
// generateAnswerSet(`${number}`);

// let answerSet = `${option1} ${option2} ${option3} ${option4}`;
  
// console.log(`answer set is ${generateAnswerSet()}`)
// `${number++}`
// generateAnswerElement(4)
// console.log(`option1 is ${option1}`)




    function showQuestionNumber() {     
        let questionNumber = $(".js-question-number").html(`<output class="js-question-number">Question ${num}</output>`);
        return questionNumber
    }
    
    function startQuiz() {
    
        $(".js-button-start").click(function() {
            event.preventDefault();
            $(".js-start-screen").toggle();
            $(".js-button-start").toggle(); 
            $(".js-main-screen").toggle();
            $("h4").html(`${h4Question}`);
            // answerSet = returnAnswers(`${number}`)
            // let answerSet = `${option1} ${option2} ${option3} ${option4}`;
            $("ul").append(`${answerSet1} ${answerSet2} ${option3} ${option4}`)
            });
            
            // number++
    }
    
    //change function name to showNextQuestionSet???
    function showNextQuestion() { 
        $(".js-button-next").click(function() {
            event.preventDefault();
            showQuestionNumber();
            `${num++}`
            
            // console.log(`question number is: ${showQuestionNumber()}`)
            h4Question = `<h4>${returnQuestionAtI()}<h4>`;
            $("h4").html(`<h4>${h4Question}<h4>`);
            `${number++}`
            generateAnswerElement(`${number}`, 2);
            // let answerSet = `${option1} ${option2} ${option3} ${option4}`;
            // returnAnswers(`${number}`)
            $("ul").append(`${option1} ${option2} ${option3} ${option4}`);
            // console.log(`num is: ${number}`)
            // number++
            // console.log(`num is now: ${number}`)

            showQuestionNumber();

            h4Question = `<h4>${returnQuestionAtI()}<h4>`;
            $("h4").html(`<h4>${h4Question}<h4>`)
            // number++
            
            h4Question = `<h4>${returnQuestionAtI()}<h4>`;
            $("h4").html(`<h4>${h4Question}<h4>`)
            // number++
            console.log(`question is now ${h4Question}`)
           $(".js-button-start").hide();
           
           restartQuiz();     
            // $("h4").html(`<h4>${h4Question}<h4>`)
        });
        console.log(`showNextQuestion ran`)
        // `${number}`++
    };
    function restartQuiz() {
        
    };
    //function returns a question at the specified index (based on the argument passed in);
    // function handleNextButton() {
    //     // question1 = `${returnQuestionAtI(1)}`
    //     $(".js-button-next").click(function() {
    //         event.preventDefault();
    //         let questionNum = $(".js-question-number").html(` <output class="js-question-number" value="num">Question ${number} </output>`);
            
    //         questionNum = $(".js-question-number").html(` <output class="js-question-number" value="num">Question ${number} </output>`);
    //         });

            
    //         $("h4").add(`<h4 role="" class="js-main-screen form js-question" id="js-question"> ${returnQuestionAtI(1)}</h4>`)
    //         number++;
    //         console.log(`handleNextButton ran`);

    // }
    
    
    // returnQuestionAtI(index);
   
    // handleNextButton();
    

    

// returnQuestionAtI(0);
restartQuiz();
showNextQuestion();
showQuestionNumber();
startQuiz();
// handleNextButton();

 };             
$(handleQuiz);

