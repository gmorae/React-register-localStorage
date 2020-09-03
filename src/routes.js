import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './pages/List'
import Register from './pages/Register'

const Routes = () => (
  <Router>
    <Route path='/' exact component={List} />
    <Route path='/register' component={Register} />
  </Router>
)

export default Routes;