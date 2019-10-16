import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Adding from './components/subjects/Adding'

class App extends React.Component {


  render() {
    return (
      <HashRouter>

        <Route path="/adding" component={Adding} />

      </HashRouter>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
