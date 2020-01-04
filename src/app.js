import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import AddingUpToTen from './components/subjects/AddingUpToTen'
import AddingUpToHundred from './components/subjects/AddingUpToHundred'
import AddingUpToThousand from './components/subjects/AddingUpToThousand'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'
import Navbar from './components/pages/Navbar'

import 'bulma'
import './style.scss'

class App extends React.Component {
  
  
  render() {
    return (
      <HashRouter>
        <Navbar/>

        <Switch>
          <Route path="/AddingUpToTen" component={AddingUpToTen} />
          <Route path="/AddingUpToHundred" component={AddingUpToHundred} />
          <Route path="/AddingUpToThousand" component={AddingUpToThousand} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer/>
      </HashRouter>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
