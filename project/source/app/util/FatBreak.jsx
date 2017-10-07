// @flow
import React from 'react'

import style from 'styles/util/fat_break.scss'

type Props = {
}

type State = {
  width: number,
  height: number,
}

export class FatBreak extends React.Component<Props, State>{

  render = (): React$Element<*> => {
    const {width, height} = this.state
    const breakSize = Math.min(width, height) * 0.1
    return (
      <hr style={{marginTop: breakSize, width: 'auto'}} />
    )
    // TODO: Get rid of auto width.
  }

  constructor(props: Props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount = (): void => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount = (): void => {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = (): void => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
}
