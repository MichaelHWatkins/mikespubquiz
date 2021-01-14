import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import data from './data.json'
const QuizPage = () => {
  const [quizList, setQuizList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const deep = _.cloneDeep(data)

    deep.sort(() => Math.random() - 0.5);

    const list = deep.slice(0, 10)
      const newList = list.map((quizInfo) => {
        quizInfo.incorrect.push(quizInfo.correct);
        quizInfo.incorrect.sort(() => Math.random() - 0.5);

        return quizInfo;

      })

      setQuizList([...quizList, newList])
  },[])

    if ( quizList.length === 0) {
    return(
      <div>
      test
      </div>
    )
  }

  else {
    if (questionNumber === 9) {
      return (
        <div>
          <p>Score for this round: {score}</p>
          <p>Refresh the page to start again!</p>
        </div>
      )
    } else {
      return(
        <div>
          <p>{quizList[0][questionNumber].question}</p>

          {quizList[0][questionNumber].incorrect.map(incorrectAnswer => (
            <button id={incorrectAnswer} onClick={(event) => {
              event.preventDefault();
              if (event.target.id === quizList[0][questionNumber].correct) {
                setScore(score + 1)
                alert("Correct!")
                setQuestionNumber(questionNumber + 1)
              }
              else {
                alert("Incorrect! The answer was " + quizList[0][questionNumber].correct)
                setQuestionNumber(questionNumber + 1)

              }
            }}>{incorrectAnswer}</button>
          ))}
        </div>
      );
    }
  }
}
export default QuizPage
