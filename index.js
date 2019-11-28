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

    
    };
    
    // function generateQuestionSetElement(question) {
    //     //function generates an html element question/answer set from the QUIZ data model as a string
        
    //     console.log("show first question set");
    //     return
    //     `<h3 data-role="question" class="form js-question" data-value="${question.number}" data-answer="${question.options[question.answer]}" data-hidden="false">${question1.question}</h3>

    //             <ul role="options-list" class="form js-quiz-question-options">
    //                 <li role="listitem" class="form js-quiz-option1" data-value="${question.option1}" data-answer="incorrect">
    //                 <input role="button" class="radio js-button-option1" type="radio" name="options" data-value="${question.option1}" checked id="option1">
    //                 <label for="option1" lang="es">${question.options["option1"]}</label>
    //                 </li>

    //                 <li role="listitem" class="form js-quiz-option2" data-value="${question.option2}" data-answer="correct">
    //                 <input role="button" class="radio js-button-option2" type="radio" name="options" data-value="${question.option2}" checked id="option2">
    //                 <label for="option2" lang="es">${question.options["option2"]}</label>
    //                 </li>

    //                 <li role="listitem" class="form js-quiz-option3" data-value="${question.option3}" data-answer="incorrect">                    
    //                 <input role="button" class="radio js-button-option3" type="radio" name="options" data-value="${question.option3}" checked id="option3">
    //                 <label for="option2" lang="es">${question.options["option3"]}</label>
    //                 </li>

    //                 <li role="listitem" class="form js-quiz-option4" data-value="${question.option4}" data-answer="incorrect">       
    //                 <input role="button" class="radio js-button-option4" type="radio" name="options" data-value="${question.option4}" checked id="option4">
    //                 <label for="option4" lang="es">{question.options["option4"]}</label>
    //                 </li>
    //             </ul>`
    // }
    
    // }

    function renderQuiz() {
        console.log("renderQuiz to page ran");
        const quizQuestionSetString =
        generateQuestionSetString(QUIZ);

        $(".js-main-quiz").html(quizQuestionSetString);
    }
    generateQuestionSetElement();
    generateQuestionSetString();
    renderQuiz();
    

console.log(`handleQuiz ran`);


}
$(handleQuiz);
