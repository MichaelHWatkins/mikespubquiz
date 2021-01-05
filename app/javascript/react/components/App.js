import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import QuizPage from './QuizPage'
import AnswerPage from './AnswerPage'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/QuizPage' component={QuizPage} />
          <Route exact path='/AnswerPage' component={AnswerPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
