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

//QUESTIONS is an array of all questions from the QUIZ data model
let questions = QUIZ.map(item => {        
        return item.question;
    });
// console.log(questions);
let answerSet = QUIZ.map(item => {
    // let answers = item.options
    console.log(item.options);
    return item.options;
});

function handleQuiz() {

    function returnOneQuestion(questions, index) {
        let question = questions[index];   
        // console.log(`question is ${question}`);
        return `${question}`;   
    };
    function generateAnswerOption(index, option) {
        console.log(answerSet[index][option]);    
        return answerSet[index][option];
              
    };
    generateAnswerOption(1, "option1");
    
// return one question, specified by the index passed as a parameter
    function generateQuestionElement(questions, index) {
        let question = returnOneQuestion(questions, index);
        // console.log(`question x is ${question}`);
        return `<h4 role="" class="js-main-screen form js-question" id="js-question1">${question}</h4>`;
    };
//display start screen welcome, instructions, and start button 

    console.log(`handleQuiz ran`);

//display main screen with question # correct answers, instruction, first question and answer options in HEADER
    function renderQuiz() {
         
        $(".js-button-start").click(function (event) {   
            event.preventDefault();
            $(".js-main-screen").toggle();
            $(".js-start-screen").toggle();     
        });
        let question1 = generateQuestionElement(questions, 0);  
        $("h4").html(`${question1}`) ;
        // console.log(`h4 shows is ${question1}`);
        console.log("renderQuiz to page ran");
    }
//display main screen with question num user is on and increment by 1 when user clicks NEXT
    function showQuestionNum() {
        let num = 1;       
//insert num into html element using class ".js-question-number"
        let questionNum = $("h2 .js-question-number").append(`<output>Question ${num}/5 </output>`);
        $(".js-button-next").click(function (event) {
        event.preventDefault();
//increment num by one and change num in header
        num += 1;
        questionNum.html(`<output>Question ${num}/5 </output>`);
        });
        console.log("showQuestionNum to page ran");
    }

    
    
    // returnOneQuestion(questions, 0);
    // generateQuestionElement();
    // showStartScreen();
    showQuestionNum();
    generateAnswerOption();
    renderQuiz();
       
};
               
$(handleQuiz);

