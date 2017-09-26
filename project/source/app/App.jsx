// @flow

import React from 'react'
import {Link, Switch, Route, IndexRoute} from 'react-router-dom'
import {HomePage} from 'app/home/HomePage'
import {HashRouter as Router, hashHistory} from 'react-router-dom'

import styles from 'styles/base.scss'

export class App extends React.Component {

  render = (): React.Element<*> => (
    <Router history={hashHistory}>
      <div>
        <Route exact path='/' component={() =>
          <HomePage />
        } />
        <Route exact path='/projects' component={() =>
          <div><p>Page not created yet </p><Link to='/'>Back to Home</Link></div>
        } />
        <Route path='/merits' component={() =>
          <div><p>Page not created yet </p><Link to='/'>Back to Home</Link></div>
        } />
        <Route path='/about' component={() =>
          <div><p>Page not created yet </p><Link to='/'>Back to Home</Link></div>
        } />
        <Route path='/posts' component={() =>
          <div><p>Page not created yet </p><Link to='/'>Back to Home</Link></div>
        } />
      </div>
    </Router>
  )
}