import React, { useState, useEffect } from 'react'
import data from './data.json'
const _ = require("lodash");

const QuizPage = () => {

  let quizList = []
  data.sort(() => Math.random() - 0.5);
  quizList = data.slice(0, 10)

  return(
    <div>
    <p>{quizList[0].question}</p>
    </div>
  )
}

export default QuizPage
