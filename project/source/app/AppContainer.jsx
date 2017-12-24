// @flow

import {HashRouter as Router, hashHistory} from 'react-router-dom'
import {Provider} from 'react-redux'
import React from 'react'


export const AppContainer = (props: {app: *, store: *}): React$Element<*> => (
  <Router history={hashHistory}>
    <Provider store={props.store}>
      {props.app()}
    </Provider>
  </Router>
)

export default AppContainer
