import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Adding from './components/subjects/Adding'
import Home from './components/pages/Home'

class App extends React.Component {


  render() {
    return (
      <HashRouter>

        <Switch>
          <Route path="/adding" component={Adding} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
