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

function handleQuiz() {

    function returnOneQuestion(questions, index) {
        let question = questions[index];   
        // console.log(`question is ${question}`);
        return `${question}`;   
    };
let index = 0;
console.log(`BEFORE: index is ${index}`);

//generate an array of answers/options based on given arguments passed in
function generateMultipleChoiceOptions(index) {
    console.log(`generateMultipleChoiceOptions ran`);
//answerSet is an array of options
    let answerSet = QUIZ[index].options;
    let answers = Object.values(answerSet);
    console.log(`answers is ${answers}`);
//ANSWER returns an array, with each item as an option/answer
    return answers;  
};
generateMultipleChoiceOptions(index);

//return a specified answer option based on the given argument
function generateOptionString(index, optionNum) {
    console.log(`generateOptionString ran`);
//create a variable that stores an object containing all options at the specified index
    let answerSets = QUIZ[index].options; //answerSets is an OBJECT  
//create a variable that returns one answer option given the specified value
    let option = answerSets[optionNum];
    return option;
}
// let option1setOne = generateOptionString(0, "option1");
// console.log(`option1 is ${generateOptionString(1, "option2")}`)
let option2setTwo = generateOptionString(1, "option2");
console.log(`option2 is ${generateOptionString(1, "option2")}`)
// console.log(`option1SetOne is ${option1setOne}`)

//generate an html element and content to insert as an answer option with content associated with the argument passed in
    function generateOptionElement(optionNum, option, index) {
        console.log(`generateOptionElement ran`);
        let specificAnswerOption = option[index];
        console.log(`specificAnswerOption is: ${specificAnswerOption}`);
        // console.log(`generateoptionElement returns: <li role="listitem" class="form js-quiz-${optionNum}">
        // <input role="button" class="radio js-button-${optionNum}" type="radio" name="options" value="option1" checked id="${optionNum}">
        // <label for="${optionNum}" lang="es">${specificAnswerOption}</label>
        // </li>`);
        //return an HTML string  of elements, with content specified by the argument passed in
        return `<li role="listitem" class="form js-quiz-${optionNum}">
        <input role="button" class="radio js-button-${optionNum}" type="radio" name="options" value="${optionNum}" checked id="${optionNum}">
        <label for="${optionNum}" lang="es">${specificAnswerOption}</label>
        </li>`;
    };
    let optionElement1Set1 = generateOptionElement("option1", generateMultipleChoiceOptions(0), 0);
    console.log(`optionElement1Set1 is ${optionElement1Set1}`);
    let optionElement2Set1 = generateOptionElement("option2", generateMultipleChoiceOptions(0), 1);
    console.log(`optionElement2Set1 is ${optionElement2Set1}`);
    let optionElement3Set1 = generateOptionElement("option3", generateMultipleChoiceOptions(0), 2);
    console.log(`optionElement3Set1 is ${optionElement3Set1}`);
    let optionElement4Set1 = generateOptionElement("option4", generateMultipleChoiceOptions(0), 3);
    console.log(`optionElement4Set1 is ${optionElement4Set1}`);

    // let options2 = generateOptionElement("option2", option2setTwo)
    // console.log(`generateOptionElement is ${options2}`);
    
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
        $("h4").html(`${question1}`);
        $("ul").html(`
        ${optionElement1Set1}
        ${optionElement2Set1} 
        ${optionElement3Set1} 
        ${optionElement4Set1}`);
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
    // generateAnswerOption();
    // generateAnswerElement()
    renderQuiz();
       
};
               
$(handleQuiz);

