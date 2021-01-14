import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = (props) => {
  return(
    <div className="landingPage"><h1>Welcome, click start to begin the quiz!</h1>
    <Link to={'/QuizPage'}>Start!</Link>
    </div>
  )
}

export default LandingPage
