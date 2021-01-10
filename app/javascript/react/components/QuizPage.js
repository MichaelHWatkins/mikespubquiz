import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import data from './data.json'
const QuizPage = () => {
  const [quizList, setQuizList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
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
    return(
      <div>
      <form className= 'callout'>
        <p>{quizList[0][questionNumber].question}</p>

        {quizList[0][questionNumber].incorrect.map(incorrectAnswer => (
          <li>{incorrectAnswer}</li>
        ))}
          <button onClick={(event) => {
            event.preventDefault();
            setQuestionNumber(questionNumber + 1)
          }}>
          Click me
        </button>
      </form>
      </div>
    );
  }
}
export default QuizPage
