import React, { useState, useEffect } from 'react'
import data from './data.json'
import QuizPageTile from './QuizPageTile'

const QuizPage = () => {
  const [quizList, setQuizList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  useEffect(() => {
    data.sort(() => Math.random() - 0.5);
    const list = data.slice(0, 10)

      const newList = list.map((quizInfo) => {
        quizInfo.incorrect.push(quizInfo.correct);
        quizInfo.incorrect.sort(() => Math.random() - 0.5);
        setQuizList(quizList.push(quizInfo))
      })
    
  },[])

  return(

    <div>
    <QuizPageTile
      quizList={quizList}
      questionNumber={questionNumber}
    />
    </div>
  );

}

export default QuizPage
