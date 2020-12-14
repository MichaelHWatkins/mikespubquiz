import React, { useState, useEffect } from 'react'

const QuizPage = (props) => {

  let quizList = [];

  useEffect(() => {
  fetch('./data.json')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    let quizList = body.question;
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}, [])
  return(
    <div>{quizList}</div>
  )
}

export default QuizPage
