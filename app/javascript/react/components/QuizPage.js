import React, { useState, useEffect } from 'react'
import data from './data.json'

const QuizPage = () => {

  let quizList = []
  let questionNumber = 0

  data.sort(() => Math.random() - 0.5);
  quizList = data.slice(0, 10)

  const newList = quizList.map((quizInfo) => {

   quizInfo.incorrect.push(quizInfo.correct);
   quizInfo.incorrect.sort(() => Math.random() - 0.5);
   return quizInfo
  })


  return(
    <div>
      <p>{newList[questionNumber].question}</p>
      <input type="radio" value="answer1" name="answer" /> {newList[questionNumber].incorrect[0]}
      <input type="radio" value="answer2" name="answer" /> {newList[questionNumber].incorrect[1]}
      <input type="radio" value="answer3" name="answer" /> {newList[questionNumber].incorrect[2]}
      <input type="radio" value="answer4" name="answer" /> {newList[questionNumber].incorrect[3]}
    </div>
  );
}

export default QuizPage
