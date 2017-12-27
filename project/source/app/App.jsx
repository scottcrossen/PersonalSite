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
import {LinkButton} from 'app/util/LinkButton'

import styles from 'styles/_base.scss'

const HomeButton = (): React$Element<*> => (
  <div className='back-home'>
    <LinkButton link='/' text='Back to Home' />
  </div>
)

export const App = (): React$Element<*> => (
  <Switch>
    <Route path='/projects' component={() =>
      <div><Projects /><HomeButton /></div>
    } />
    <Route path='/merits' component={() =>
      <div><Merits /><HomeButton /></div>
    } />
    <Route path='/about' component={() =>
      <div><AboutMe /><HomeButton /></div>
    } />
    <Route path='/posts' component={() =>
      <div><Posts /><HomeButton /></div>
    } />
    <Route path='/' component={() =>
      <Home />
    } />
  </Switch>
)

export default App
