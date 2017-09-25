// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'app/AppContainer'

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('app/AppContainer.jsx', () => {

    const NextAppContainer = require('app/AppContainer.jsx')
    ReactDOM.render(
      <AppContainer />,
      document.getElementById('root')
    )

  })
}
