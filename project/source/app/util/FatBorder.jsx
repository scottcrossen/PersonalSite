// @flow
import React from 'react'

type Props = {
  children: React$Element<*>
}

type State = {
  width: number,
  height: number,
}

export class FatBorder extends React.Component<Props, State>{

  render = (): React$Element<*> => {
    const {width, height} = this.state
    const {children} = this.props
    const borderSize = Math.min(width, height) * 0.1
    return (
      <div style={{marginLeft: borderSize, marginTop: borderSize, marginRight: borderSize, width: 'auto'}}>
        {children}
      </div>
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
