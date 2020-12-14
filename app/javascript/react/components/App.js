import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import QuizPage from './QuizPage'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/QuizPage' component={QuizPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
