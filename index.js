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

let returnAllQuestions = function(quiz) {
    let questions = QUIZ.map(item => {
        return item.question;
    });
    
    console.log(`questions is ${questions}`);
    return questions;
};
let returnOneQuestion = function(questions) { 
    let question = questions.question;  
    console.log(question)
    return question;
}
// returnAllQuestions();


function handleQuiz() {
    

    // function returnQuestions(quiz) {
    
    //     console.log(`${quiz}.${questions}`);
    // };
    // returnQuestions(QUIZ);
    
    
    console.log(`handleQuiz ran`);

     //GENERATE QUESTION STRING returns a string of the h4 element, with QUESTION inserted as content
     function generateQuestionString(questions, index) {
        let questionIndex = showOneQuestion(questions, index);
        // console.log(`<h4 role="" class="js-main-screen form js-question" id="js-question1">${question}</h4>)`);
        console.log(`<h4 role="" class="js-main-screen form js-question" id="js-question1">${questionIndex}</h4>`);
        return `<h4 role="" class="js-main-screen form js-question" id="js-question1">${questionIndex}</h4>`;
    };

    // let question1 = generateQuestionString(questions, 1);
    // console.log(`question1 is ${question1}`);

    function showStartScreen() {
        //display start screen welcome, instructions, and start button 
        $(".js-button-start").click(function (event) {
            event.preventDefault();
        $("h4").append(`${question1}`)
        });
        console.log("showStartScreen ran")
    };

    function renderQuiz() {
    //display main screen with question # correct answers, instruction, first question and answer options
        $(".js-button-start").click(function (event) {
            event.preventDefault();
        $(".js-main-screen").toggle();
        $(".js-start-screen").toggle();    
        });
        // showQuestionNum();
        console.log("renderQuiz to page ran");
    }

    function showOneQuestion(questions, index) {
        let question = `${questions}+[${index}].question`;

        // console.log(`question is ${question}`);
        return question; 
    };
   
    // function showQuestion1() {
    //     let questionSet = QUIZ.map(item => {
    //             let question1 = `${item.question1}`;
    //             console.log(question1);
    //             $(".js-button-start").click(function (event) {
    //                 event.preventDefault();
    //             //increment num by one and change num in HEADER
    //             num += 1;
    //             ("h4").text(`Question ${num}`);
    //             $("h4").attr("id", `js-question-${num}`)
    //     let num = 1;
    //     $("h4").append(`${question1}`);
    //     $("h4").attr("id", `js-question-${num}`)
    //     //update js-question ID to match question number user is currently on
    //     $("h4").attr("id", `js-question-${num}`);
    //     let attr = $("h4").attr("id", `js-question-${num}`);
    //     console.log(attr);
    //         }); 
    // //display first question set when START button clicked
    //     console.log('showQuestion1 ran')
    // };
    
    //create HANDLENEXTBUTTON for all functions?

    // function showQuestion1() {
    //     let num = 1;
    //     let questions = QUIZ.map((item) => {
    //         return item.number;    
    //         // return `${questions}[${index}]`;
            
    //             // let question1 = item.question1;
    //             //  let question2 = item.question2;
    //             //  let question3 = item.question3;
    //             //  let question4 = item.question4;
    //             //  let question5 = item.question5;

    //              return questions;
    //             // console.log(question1)
    //         });
    //         console.log(questions)
    //     $(".js-button-start").click(function (event) {
    //         event.preventDefault();
        
    //     console.log(question1)
    //     $("h4").text(`${question1}`);
    //     $("h4").attr("id", `js-question-${num}`)
        
    //     // $("h4").append(`${question1}`);
    //     // $("h4").attr("id", `js-question-${num}`)
    //     //update js-question ID to match question number user is currently on
    //     // $("h4").attr("id", `js-question-${num}`);
    //     // let attr = $("h4").attr("id", `js-question-${num}`);
    //     // console.log(attr);
    //         }); 
    //     console.log('showQuestion1 ran')
    // };
    
    
    
    function showNextQuestion() {
    //display question from QUIZ data model with a matching ID of that inside the H4 element
        let num = 1;
    //display next question number when NEXT button clicked in HEADER element      
        // let question = $("h4").text(`${questions} ${num}`);
        // question.text(`Question ${num}`);
        // let attr = $("h4").attr("id");
        
        // $(".js-button-next").click(function (event) {
        //     event.preventDefault();
        // //increment num by one and change num in HEADER
        // num += 1;
        // question.text(`Question ${num}`);
        // $("h4").attr("id", `js-question-${num}`)
        // //update js-question ID to match question number user is currently on
        // $("h4").attr("id", `js-question-${num}`);
        // let attr = $("h4").attr("id", `js-question-${num}`);
        // console.log(attr);
        // });
        console.log("showNextQuestion to page ran");
    }

    function showQuestionNum() {
    //questions returns an ARRAY of all questions 
        let num = 1; 
    //display main screen with question num user is on and increment by 1 when user clicks NEXT
        
    //insert num into html element using class ".js-question-number"
        // let questionNum = $("h2 .js-question-number").append(`<output>Question ${num}/5 </output>`);
        // $(".js-button-next").click(function (event) {
        //     event.preventDefault();
        // //increment num by one and change num in header
        // num += 1;
        // questionNum.html(`<output>Question ${num}/5 </output>`);
        // // goToNextQuestion();
        // });
        console.log("showQuestionNum to page ran");

    }
    

    // function showNextQuestion() {
    // //when NEXT button clicked, increment question number in header by one to show which number user is on
    //     $(".js-button-next").click(function (event) {
    //         event.preventDefault();
    //         //increment num by one and change num in header
    //         num += 1;
    //         $("h2 .js-question-number").append(`<output>Question ${num}/5 </output>`);
    //     });
    // }
    
    // handleQuiz();
    // showStartScreen();
    // // showQuestionNum();
    // showOneQuestion();
    // generateQuestionString();
    // showNextQuestion();
    // returnQuestions();
    returnAllQuestions();
    returnOneQuestion();
    renderQuiz();
    

    
};
        
        
$(handleQuiz);

