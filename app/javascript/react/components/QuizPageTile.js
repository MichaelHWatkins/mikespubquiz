import React from 'react'

const QuizPageTile = (props) => {

  return(

    <form className= 'callout'>
      <p>{props.quizList[props.questionNumber].question}</p>

      <input type="radio" value="answer1" name="answer" /> {props.quizList[props.questionNumber].incorrect[0]}
      <input type="radio" value="answer2" name="answer" /> {props.quizList[props.questionNumber].incorrect[1]}
      <input type="radio" value="answer3" name="answer" /> {props.quizList[props.questionNumber].incorrect[2]}
      <input type="radio" value="answer4" name="answer" /> {props.quizList[props.questionNumber].incorrect[3]}
      <button onClick={() => setQuestionNumber(count + 1)}>
        Click me
      </button>
    </form>
  );

}

export default QuizPageTile
