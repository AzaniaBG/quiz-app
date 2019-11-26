'use strict'
const QUIZ = [
        question1 = {
            question: "How are you (informal)?",
            number: 1,
            options: {
                option1: "¿Como estas?",
                option2: "¿Cómo estás?",
                option3: "¿Cómo eres?",
                option4: "¿Qué cómo?"
            },
            answer: 1,//refers to `options` index ("¿Cómo estás?")
            selected: null,//need to toggle `selected` class
            feedback: function() {
                let selected = question1.selected;
                if(selected === null) {
                    return "Please select an answer."
                } else if(selected === true) {
                    return `Great! "¿Cómo estás?" is correct; "estar" is the correct verb. Note that "esta" without an accent means "this".`
                } else {
                    return `Oops! "¿Cómo estás?" is the correct answer.`
                }
            }
        },
        question2 = {
            question: "What are you doing (formal)?",
            number: 2,
            options: ["¿Qué haga?", "¿Qué haces?", "¿Qué haciendo?", "¿Qué estás haciendo?"],
            answer: 3,//refers to `options` index ("¿Qué estás haciendo?")
            selected: null,//need to toggle `selected` class
            feedback: function() {
                let selected = question2.selected;
                if(selected === null) {
                    return "Please select an answer."
                } else if(selected === true) {
                    return `Great! "¿Qué estás haciendo?" is the correct answer. You can also say, “¿Qué haces?”.`
                } else {
                    return `Oops! "¿Qué estás haciendo?" is the correct answer.`
                };
            }
        },


]

function handleQuiz() {


}

$(handleQuiz);