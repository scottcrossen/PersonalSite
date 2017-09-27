// @flow

import React from 'react'

import styles from 'styles/util/image.scss'

type Props = {
  source: string,
  fit: FitType,
  style?: Object
}

export const FitTypes = {
  none: 'none',
  matchWidth: 'matchWidth',
  matchHeight: 'matchHeight',
}

export type FitType = $Keys<typeof FitTypes>

export class Image extends React$Component<Props>{
  props: Props

  render = (): React$Element<*> => (
    <img
      style={Object.assign({...this.props.style},
        ((this.props.fit == FitTypes.matchHeight) ? {height: '100%'} : {}),
        ((this.props.fit == FitTypes.matchWidth) ? {width: '100%'} : {})
      )}
      src={this.props.source}
    />
  )
}
