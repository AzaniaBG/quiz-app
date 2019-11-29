'use strict'
const QUIZ = [
           {
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

function handleQuiz() {
//create a question set from the QUIZ array using .map, which will be inserted into the HTML elements
    // let questionsArray = QUIZ.map(item => `${item.question}`); 
    // //returns an array of all questions
    // console.log(questionsArray);
    // questionsArray.forEach(showQuestion);
    // function showQuestion(question) {
    //     return question;   
    // };
    
    function showStartScreen() {
        //display start screen welcome, instructions, and start button 
        console.log("showStartScreen ran")
    }

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
    
    //create HANDLENEXTBUTTON for all functions?
    function showNextQuestion() {
    //display next question when NEXT button clicked
        let num = 1;
        let question = $("h4").text(`Question ${num}`);
        // (`<h4 role="" class="js-main-screen form js-question1">Question ${num}</h4>`);
        console.log(question);
        let attr = $("h4").attr("id");
        console.log(attr);
        $(".js-button-next").click(function (event) {
            event.preventDefault();
        //increment num by one and change num in header
        num += 1;
        question.text(`Question ${num}`);
        $("h4").attr("id", `js-question-${num}`)
        // question.text(`<h4 role="" class="js-main-screen form js-question1">Question ${num}</h4></h4>`);
        // goToNextQuestion();
        $("h4").attr("id", `js-question-${num}`);
        let attr = $("h4").attr("id", `js-question-${num}`);
        console.log(attr);
        // question.text(`<h4 role="" class="js-main-screen form js-question1">Question ${num}</h4></h4>`);
        // goToNextQuestion();
        console.log("showNextQuestion to page ran");
        });
        console.log("showNextQuestion to page ran");
    }

    function showQuestionNum() {
    //display main screen with question num user is on and increment by 1 when user clicks NEXT
        let num = 1;
    //insert num into html element using class ".js-question-number"
        let questionNum = $("h2 .js-question-number").append(`<output>Question ${num}/5 </output>`);
        $(".js-button-next").click(function (event) {
            event.preventDefault();
        //increment num by one and change num in header
        num += 1;
        questionNum.html(`<output>Question ${num}/5 </output>`);
        // goToNextQuestion();
        });
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
    
    showStartScreen();
    showQuestionNum();
    showNextQuestion();
    renderQuiz();
    

    console.log(`handleQuiz ran`);
};
        
        
$(handleQuiz);

