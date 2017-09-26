// @flow

import {Image, FitTypes} from 'app/util/Image'
import {Link} from 'react-router-dom'
import {ScreenClassRender} from 'react-grid-system'
import React from 'react'

import styles from 'styles/home/home-page.scss'

type Props = {
}
type State = {
  width: number,
  height: number,
}

export class HomePage extends React.Component {
  state: State

  render = (): React.Element<*> => {
    const {width, height} = this.state
    const borderSize = Math.min(width, height) * 0.1

    const imageSizeFunction = (screenClass, props) => {
      const isSplitVertical = (screenClass === 'lg' || screenClass === 'xl')
      return ({
        marginLeft: `${borderSize}px`,
        marginRight: `${isSplitVertical ? borderSize / 2 : borderSize}px`,
        display: 'inline-block',
        height: `${isSplitVertical ? height - 2 * borderSize : (height - 2 * borderSize) / 3}px`,
        width: `${isSplitVertical ? (width - 3 * borderSize) / 2 : width - 2 * borderSize}px`,
        ...props.style
       })
    }

    const textSizeFunction = (screenClass, props) => {
      const isSplitVertical = (screenClass === 'lg' || screenClass === 'xl')
      return ({
        marginRight: `${borderSize}px`,
        marginLeft: `${isSplitVertical ? borderSize / 2 : borderSize}px`,
        display: 'inline-block',
        height: `${isSplitVertical ? height - 2 * borderSize : (height - 2 * borderSize) / 2}px`,
        width: `${isSplitVertical ? (width - 3 * borderSize) / 2 : width - 2 * borderSize}px`,
        ...props.style
       })
    }

    return (
      <div style={{marginTop: borderSize, marginBot: borderSize}}>
      <ScreenClassRender style={imageSizeFunction}>
        <div>
          <Image
            source='http://scottcrossen42.com/wp-content/uploads/2016/06/home_hero-1.jpg'
            fit={FitTypes.none}
          />
        </div>
      </ScreenClassRender>
      <ScreenClassRender style={textSizeFunction}>
        <div>
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
      </ScreenClassRender>
    </div>
    )
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
