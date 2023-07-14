import React, { useState } from 'react';
import './App.css';



function App() {
  const [finalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);



  const questions = [
    {
      quest: "What does HTML stands for?", 
      options: [
        { id: 0, quest: "Hypertext Making Logo", isCorrect: false },
        { id: 1, quest: "Hyperactive Text Markup Language", isCorrect: false },
        { id: 2, quest: "HyperText Markup Language", isCorrect: true },
        { id: 3, quest: "HydoText Management Level", isCorrect: false },
      ]
    },

    {
      quest: "How do you add comments in HTML??", 
      options: [
        { id: 0, quest: "<- This is a comment ->", isCorrect: false },
        { id: 1, quest: "<!-- This is a comment -->", isCorrect: true },
        { id: 2, quest: "<- This is a comment >", isCorrect: false },
        { id: 3, quest: "<-->This is a comment <-->", isCorrect: false },
      ]
    },

    {
      quest: "Who is the founder of LinkedIn?", 
      options: [
        { id: 0, quest: "Jeff Bezos", isCorrect: false },
        { id: 1, quest: "Fedrick Leonard", isCorrect: false },
        { id: 2, quest: "Reid Hoffman", isCorrect: true },
        { id: 3, quest: "Elon Musk", isCorrect: false },
      ]
    },

    {
      quest: "How can you add CSS styles to an HTML element?", 
      options: [
        { id: 0, quest: "External stylesheet", isCorrect: true },
        { id: 1, quest: "offline stylesheet", isCorrect: false },
        { id: 2, quest: "Inbuilt styling", isCorrect: false },
        { id: 3, quest: "Outline styles", isCorrect: false },
      ]
    },

    {
      quest: "What does CSS stand for?", 
      options: [
        { id: 0, quest: "Cascading Sheets Styles", isCorrect: false },
        { id: 1, quest: "Cascading Start Sheet", isCorrect: false },
        { id: 2, quest: "Cascading Style Stand", isCorrect: false },
        { id: 3, quest: "Cascading Style Sheets", isCorrect: true },
      ]
    },

    {
      quest: "How can you override CSS styles?", 
      options: [
        { id: 0, quest: "!inline", isCorrect: false },
        { id: 1, quest: "!important", isCorrect: true },
        { id: 2, quest: "!special", isCorrect: false },
        { id: 3, quest: "!internal", isCorrect: false },
      ]
    },

    {
      quest: "Who is the founder of Microsoft?", 
      options: [
        { id: 0, quest: "Paul Allen", isCorrect: false },
        { id: 1, quest: "Barrack Obama", isCorrect: false },
        { id: 2, quest: "Tony Elemume", isCorrect: false },
        { id: 3, quest: "Bill Gates", isCorrect: true },
      ]
    },

    {
      quest: "How do you declare a variable in JavaScript?", 
      options: [
        { id: 0, quest: "const", isCorrect: true },
        { id: 1, quest: "array", isCorrect: false },
        { id: 2, quest: "this", isCorrect: false },
        { id: 3, quest: "object", isCorrect: false },
      ]
    },

    {
      quest: "What is JSON in JavaScript?", 
      options: [
        { id: 0, quest: "JavaStyle Object Notation", isCorrect: false },
        { id: 1, quest: "JavaScript Object Notation", isCorrect: true },
        { id: 2, quest: "JavaScript Object Number", isCorrect: false },
        { id: 3, quest: "JavaScript Option Notation", isCorrect: false },
      ]
    },

    {
      quest: "What is DOM in JavaScript?", 
      options: [
        { id: 0, quest: "Document Option Model", isCorrect: false },
        { id: 1, quest: "Defined Object Model ", isCorrect: false },
        { id: 2, quest: "Document Object Model ", isCorrect: true },
        { id: 3, quest: "Defined Option Model", isCorrect: false },
      ]
    },
  ]



  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }

    else {
      setFinalResult(true);
    }
  }


  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  }

  return (
    <div className="App">
      {/*1. Header*/}
      <h1 className='header'>WEB DEV QUIZ</h1>

      {/*2. Current Score*/}
      <h2 className='score'>Your Current Score: {score}</h2>

      {finalResult ? (
        /*4. FinalResult*/
       <div className='finalResult'>
          <h3>Final Result</h3>
          <h2>{score} out of {questions.length} correct = ({(score/questions.length) * 100}%)</h2>

          <button onClick={() => restartGame()}>Restart Game</button>
        </div>

      ) : (

          /*3. QuestionCard*/
        <div className="questionCard">
          <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          <h3>{questions[currentQuestion].quest}</h3>

          <ul>
            { questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.quest}</li>
              )
            }) }
           
          </ul>
        </div>

      )}
      
    </div>
  )
}

export default App;
