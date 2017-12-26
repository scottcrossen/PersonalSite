// @flow

import React from 'react'
import classnames from 'classnames'
import {Image, FitTypes} from 'app/util/Image'

import styles from 'styles/util/_image-header.scss'

type Props = {
  title: string,
  source: string,
}

export class ImageHeader extends React.Component<Props>{

  render = (): React$Element<*> => {
    return <div className={classnames('image-header')}>
      <div className={classnames('overlay')}>
        <div className={classnames('opacity-screen')}></div>
        <h1>{this.props.title}</h1>
      </div>
      <div className={classnames('title-image')}>
        <Image
          source={this.props.source}
          fit={FitTypes.none}
        />
      </div>
    </div>
  }
}
