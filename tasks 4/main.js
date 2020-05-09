//starting the game
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
//fetching the question and answer element

const questionElement =document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultContainer =document.getElementById('result')

//Shuffling the questions
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', StartGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })
 


function StartGame(){
    //Hiding the start button
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    //setting the shuffled question
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    //showing the question
    setNextQuestion()
}

//function for showing the next question
function setNextQuestion() {
    resetState ()
//shows the shuffled question
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
//looping through the answers
    question.answers.forEach(answer => {
        const button= document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        //checking for the  correct answer
        if (answer.correct){
            button.dataset.correct = answer.correct
        }        
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
//Error
//Setting the results
/*function showResults(){
    var gameOver = "<h1>Result</h1>",
    gameOverHtml += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
 const answerContainers = questionContainer.querySelectorAll('answer');
//keeping tracks of user's answer
 let numCorrect = 0;
   questions.forEach(currentQuestion, questionElement); {
       
    const answerContainer = answerContainers[questionElement]; 
    const selector = selectedButton;
    const userAnswer = (answerContainer.querySelector(selector)|| {}).value;
   
    if(userAnswer === currentQuestion.correct)
    //add to the number of correct answers
    numCorrect++;
    //show the number of correct answers out of total
resultContainer.innerHTML = '${numCorrect} out of ${questions.length}';
}
}
//show result
nextButton.addEventListener('click', showResults); */


function selectAnswer(e){
    const selectedButton= e.target
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Result'
      startButton.classList.remove('hide')
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
//Setting an array of  questions

const questions =[
    {
        question:'How do you call a function named "myfunction"?',
        answers: [
            {text: 'call function myfunction()', correct:false},
            {text: 'myfunction()', correct:true},
            {text: 'all of the above', correct:false}
        ]
    },
    {
        question: 'How do you declare a Javascript variable?',
        answers: [
            {text: 'varible carName;', correct:false},
            {text: 'v carName;', correct:false},
            {text: 'var carName;', correct: true },
            {text: 'none of these', correct:false}
        ]
    },
    {
        question:'Which operator is used to assign a value to a variable?',
        answers: [
            {text: '-', correct:false},
            {text: '=', correct:true},
            {text: '+', correct:false},
            {text: '*', correct:false}
        ]
    },
    {
        question:'How to write an IF statement in JavaScript?',
        answers:[
            {text: 'if i = 5', correct:false},
            {text:  'if i >==5' , correct:false},
            {text: 'if i ==5 then', correct:false},
            {text: 'if (i ==5)', correct:true}
        ]
    },
    {
        question:'How does a FOR loop start?',
        answers:[
            {text:'for ( i <= 5; i++)', correct:false},
            {text: 'for i = 1 to 5', correct:false},
            {text:'for (i = 0; i <= 5)', correct:false},
            {text: 'for (i= 0; i <=5; i++', correct:true}
        ]
    }
]