// @flow

import {HashRouter as Router, hashHistory} from 'react-router-dom'
import {HomePage} from 'app/home/HomePage'
import {Link, Switch, Route} from 'react-router-dom'
import {Posts} from 'app/posts/Posts'
import React from 'react'
import {Merits} from 'app/merits/Merits'
import {withRouter} from 'react-router-dom'

import styles from 'styles/_base.scss'

export const App = (): React$Element<*> => (
  <Switch>
    <Route path='/projects' component={() =>
      <div><p>Page not created yet </p><Link className='back-home' to='/'><h3>Back to Home</h3></Link></div>
    } />
    <Route path='/merits' component={() =>
      <div><Merits /><Link className='back-home' to='/'><h3>Back to Home</h3></Link></div>
    } />
    <Route path='/about' component={() =>
      <div><p>Page not created yet </p><Link className='back-home' to='/'><h3>Back to Home</h3></Link></div>
    } />
    <Route path='/posts' component={() =>
      <Posts />
    } />
    <Route path='/' component={() =>
      <HomePage />
    } />
  </Switch>
)

export default App
