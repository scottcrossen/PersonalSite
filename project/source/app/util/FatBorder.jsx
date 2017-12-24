// @flow

import React from 'react'
import classnames from 'classnames'

import style from 'styles/util/_fat-border.scss'

type Props = {
  children?: React$Node,
}

export class FatBorder extends React.Component<Props>{

  render = (): React$Element<*> => {
    return (
      <div className={classnames('fat-border')}>
        {this.props.children}
      </div>
    )
  }
}
