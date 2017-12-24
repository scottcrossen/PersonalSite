// @flow

import {HashRouter as Router, hashHistory} from 'react-router-dom'
import {Home} from 'app/home/Home'
import {Link, Switch, Route} from 'react-router-dom'
import {Posts} from 'app/posts/Posts'
import React from 'react'
import {Merits} from 'app/merits/Merits'
import {withRouter} from 'react-router-dom'
import {Projects} from 'app/projects/Projects'
import {AboutMe} from 'app/about/AboutMe'

import styles from 'styles/_base.scss'

export const App = (): React$Element<*> => (
  <Switch>
    <Route path='/projects' component={() =>
      <div><Projects /><Link className='back-home' to='/'><h3>Back to Home</h3></Link></div>
    } />
    <Route path='/merits' component={() =>
      <div><Merits /><Link className='back-home' to='/'><h3>Back to Home</h3></Link></div>
    } />
    <Route path='/about' component={() =>
      <div><AboutMe /><Link className='back-home' to='/'><h3>Back to Home</h3></Link></div>
    } />
    <Route path='/posts' component={() =>
      <Posts />
    } />
    <Route path='/' component={() =>
      <Home />
    } />
  </Switch>
)

export default App
