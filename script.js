document.addEventListener("DOMContentLoaded", openStartModal());
const questions = [
    {
        question: "What does the abbreviation HTML stand for?",
        optionA: "HyperText Markup Language",
        optionB: "HyperText Machine Language",
        optionC: "HyperText Marking Language",
        optionD: "HighText Marking Language",
        correctOption: "optionA"
    },

    {
        question: "Which of the following CSS selectors are used to specify a group of elements?",
        optionA: "tag",
        optionB: "id",
        optionC: "class",
        optionD: "both class and tag",
        correctOption: "optionC"
    },

    {
        question: "What is DOM in HTML?",
        optionA: "Language dependent application programming",
        optionB: "Hierarchy of objects in ASP.NET",
        optionC: "Application programming interface",
        optionD: "Convention for representing and interacting with objects in html documents",
        correctOption: "optionD"
    },

    {
        question: "In which part of the HTML metadata is contained?",
        optionA: "head tag",
        optionB: "title tag",
        optionC: "html tag",
        optionD: "body tag",
        correctOption: "optionA"
    },

    {
        question: "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        optionA: "HTML",
        optionB: "PHP",
        optionC: "CSS",
        optionD: "Ajax",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is not a HTML5 tag?",
        optionA: "track",
        optionB: "video",
        optionC: "source",
        optionD: "slider",
        correctOption: "optionD"
    },

    {
        question: "How do we write comments in HTML?",
        optionA: "/…….",
        optionB: "!……",
        optionC: "/……/",
        optionD: "…….!",
        correctOption: "optionB"
    },

    {
        question: "Which of the following elements in HTML5 defines video or movie content?",
        optionA: "video",
        optionB: "movie",
        optionC: "audio",
        optionD: "media",
        correctOption: "optionA"
    },

    {
        question: " Which element is used for or styling HTML5 layout?",
        optionA: "CSS",
        optionB: "jQuery",
        optionC: "JavaScript",
        optionD: " PHP",
        correctOption: "optionA"
    },

    {
        question: "Which HTML tag is used for making character appearance bold?",
        optionA: "<u>content</u>",
        optionB: "<b>content</b>",
        optionC: "<br>content</br>",
        optionD: "<i>content</i>",
        correctOption: "optionB"
    },

    {
        question: "Which HTML tag is used to insert an image?",
        optionA: "img url=”htmllogo.jpg”",
        optionB: "img alt=”htmllogo.jpg”",
        optionC: "img src=”htmllogo.jpg” ",
        optionD: "img link=”htmllogo.jpg” ",
        correctOption: "optionC"
    },

    {
        question: "HTML is a subset of ___________ ?",
        optionA: "SGMT",
        optionB: "SGML",
        optionC: "SGME",
        optionD: "XHTML",
        correctOption: "optionB"
    },


    {
        question: "Among the following, which is the HTML paragraph tag?",
        optionA: "p",
        optionB: "pre",
        optionC: "hr",
        optionD: "a",
        correctOption: "optionA"
    },

    {
        question: "Which of the following extension is used to save an HTML file?",
        optionA: ".hl",
        optionB: ".h",
        optionC: ".htl",
        optionD: ".html",
        correctOption: "optionD"
    },

    {
        question: "Which of the following CSS property is used to make the text bold?",
        optionA: "text-decoration: bold",
        optionB: "font-weight: bold",
        optionC: "font-style: bold",
        optionD: "text-align: bold",
        correctOption: "optionB"
    },

    {
        question: "Which attribute is not essential under <iframe>?",
        optionA: "frameborder",
        optionB: "width",
        optionC: "height",
        optionD: "src",
        correctOption: "optionA"
    },

    {
        question: "Which works similar to <b> element?",
        optionA: "blockquote",
        optionB: "strong",
        optionC: "em",
        optionD: "i",
        correctOption: "optionB"
    },

    {
        question: "Which tag is used to underline the text in HTML?",
        optionA: "p",
        optionB: "u",
        optionC: "i",
        optionD: "ul",
        correctOption: "optionB"
    },

    {
        question: " Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
        optionA: "type",
        optionB: "article",
        optionC: "id",
        optionD: "class",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is an HTML specification used to add more information to HTML tags?",
        optionA: "Modifydata",
        optionB: "Minidata",
        optionC: "Macrodata",
        optionD: "Microdata",
        correctOption: "optionD"
    },

    {
        question: "Which of the following CSS framework is used to create a responsive design?",
        optionA: "django",
        optionB: "raiils",
        optionC: "larawell",
        optionD: "bootstrap",
        correctOption: "optionD"
    },

    {
        question: "Which of the following CSS style property is used to specify an italic text?",
        optionA: "style",
        optionB: "font",
        optionC: "font-style",
        optionD: "@font-face",
        correctOption: "optionC"
    },

    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        optionA: "head",
        optionB: "h1",
        optionC: "h6",
        optionD: "heading",
        correctOption: "optionB"
    },

    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        optionA: "Head, Title, HTML, body",
        optionB: "HTML, Body, Title, Head",
        optionC: "HTML, Head, Title, Body",
        optionD: "HTML, Head, Title, Body",
        correctOption: "optionD"
    },

    {
        question: "How to create a checkbox in HTML?",
        optionA: "<input type = checkbox>",
        optionB: "<input type = button>",
        optionC: "<checkbox>",
        optionD: "<input type = check>",
        correctOption: "optionA"
    }

]

let shuffledQuestions = [] 
function handleQuestions() { 
  
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}
document.getElementById("display-question").style.fontSize= "20px";

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   
   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

   
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            playerScore--
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

   
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}
function openStartModal(){
    document.getElementById("start-modal").style.display="flex";
}

function closeStartModal(){
    document.getElementById('start-modal').style.display = "none"
}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    openStartModal();
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}