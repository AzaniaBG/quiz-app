'use strict'
const QUIZ = [
           {
            id: "js-question1",
            question1: "How are you (informal)?",
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
            question2: "What are you doing (formal)?",
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
            question3: "What have you done (informal)?",
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
            question4: "What were you cooking (informal)?",
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
            question5: "When will you visit (informal)?",
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
    let questionsArray = QUIZ.map(item => 
        {
            let question = `${item.question}`;
            let questionOptions = `
            ${item.options["option1"]}
            ${item.options["option2"]}
            ${item.options["option3"]}
            ${item.options["option4"]}`;
            let option1 = `${item.options["option1"]}`;
            let option2 = `${item.options["option2"]}`;
            let option3 = `${item.options["option3"]}`;
            let option4 = `${item.options["option4"]}`;
            let questionSet = `${question} ${questionOptions}`;
            console.log(questionSet);
        }); 
    
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

    function showQuestion1() {
        let questionSet = QUIZ.map(item => {
                let question = `${item.question}`;
                let questionOptions = `
                ${item.options["option1"]}
                ${item.options["option2"]}
                ${item.options["option3"]}
                ${item.options["option4"]}`;
                let option1 = `${item.options["option1"]}`;
                let option2 = `${item.options["option2"]}`;
                let option3 = `${item.options["option3"]}`;
                let option4 = `${item.options["option4"]}`;
                let questionSet = `${question} ${questionOptions}`;
                return questionSet;
            }); 
    //display first question set when START button clicked
        return questionSet;
    };
    
    //create HANDLENEXTBUTTON for all functions?
    function showOne(arr) {
        
        console.log(arr);
    };

    function showNextQuestion() {
    //display question from QUIZ data model with a matching ID of that inside the H4 element
        let num = 1;
    //QUESTIONS returns an array of each question
        let questions = QUIZ.map(item => {
            return `${item.question}`;
        });
        
        showOne(questions);
        // console.log(questions);
        
        // function showOne(questionsArr) {
        
        //     for (let i=0; i < questionsArr.length; i++) {
        //         let question = questionsArr[i];
        //         console.log(question);
        //         return question;
        //     }
        //     console.log("showOne ran");
        // };
        // showOne(questions);
    //display next question number when NEXT button clicked in HEADER element
        
        let question = $("h4").text(`${questions} ${num}`);
        question.text(`Question ${num}`);
        
        let attr = $("h4").attr("id");
        

        $(".js-button-next").click(function (event) {
            event.preventDefault();
        //increment num by one and change num in HEADER
        num += 1;
        question.text(`Question ${num}`);
        $("h4").attr("id", `js-question-${num}`)
        //update js-question ID to match question number user is currently on
        $("h4").attr("id", `js-question-${num}`);
        let attr = $("h4").attr("id", `js-question-${num}`);
        console.log(attr);
    
        });
        console.log("showNextQuestion to page ran");
    }

    function showQuestionNum() {
    //questions returns an ARRAY of all questions 
        let num = 1;
        let questions = QUIZ.map(item => {
            let question = `${item.question}`;
            return question;
        });
        // console.log(questions);
        // let question = `${questions}[${num}]`;
        // console.log(question);
        
    //display main screen with question num user is on and increment by 1 when user clicks NEXT
        
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
    showQuestion1();
    showOne();
    showNextQuestion();
    renderQuiz();
    

    console.log(`handleQuiz ran`);
};
        
        
$(handleQuiz);

