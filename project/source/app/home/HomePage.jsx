// @flow

import React from 'react'
import {Image, FitTypes} from 'app/util/Image'
import {Container, Row, Col} from 'react-grid-system'
import {Link} from 'react-router-dom'

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

    return (
      <div style={{marginTop: borderSize, marginBot: borderSize, height: height - 2 * borderSize}}>
        <Container >
          <Row>
            <Col lg={6}>
              <Image
                source='http://scottcrossen42.com/wp-content/uploads/2016/06/home_hero-1.jpg'
                fit={FitTypes.matchHeight}
              />
            </Col>
            <Col lg={6}>
            <div style={{height: '100%'}}>
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
            </Col>
          </Row>
        </Container>
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
