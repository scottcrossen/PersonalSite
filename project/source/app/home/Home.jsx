// @flow

import {Image, FitTypes} from 'app/util/Image'
import {Link} from 'react-router-dom'
import React from 'react'
import classnames from 'classnames'

import styles from 'styles/home/_home-page.scss'

type Props = {
}
type State = {
}

export class Home extends React.Component<Props, State>{

  render = (): React$Element<*> => {
    return (
      <div className={classnames('home-page')}>
        <div className={classnames('left-panel')}>
          <Image
            source={require('assets/images/global/esc_top_1.jpg')}
            fit={FitTypes.none}
          />
        </div>
        <div className={classnames('right-panel')}>
          <h1>Scott Crossen</h1>
          <Link to='/projects'>
            <h2>Projects</h2>
          </Link>
          <Link to='/merits'>
            <h2>Merits</h2>
          </Link>
          <Link to='/about'>
            <h2>About Me</h2>
          </Link>
          <Link to='/posts'>
            <h2>Blog Posts</h2>
          </Link>
        </div>
      </div>
    )
  }
}
