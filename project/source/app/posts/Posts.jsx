import {Carousel} from 'react-responsive-carousel';
import {FatBorder} from 'app/util/FatBorder.jsx'
import {FatBreak} from 'app/util/FatBreak.jsx'
import {Image, FitTypes} from 'app/util/Image'
import classnames from 'classnames'
import React from 'react'

import styles_1 from 'styles/posts/posts.scss';
import styles_2 from 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {
}

type State = {
  width: number,
  height: number,
}

export class Posts extends React.Component<Props, State>{

  render = (): React$Element<*> => {
    const {height, width} = this.state
    const {children} = this.props
    const imageHeight = height * 0.3
    // TODO: fix the carousel width for small displays
    // TODO: make the overlay text not black
    const carouselBorder = Math.min(width, height) * 0.4
    return (
      <div className={classnames('posts')}>
        <div className={classnames('overlay')}>
          <FatBorder>
            <h1>Blog Posts</h1>
          </FatBorder>
        </div>
        <FatBorder>
          <div style={{height: imageHeight}}>
            <Image source={require('assets/images/global/y_mount_top.jpg')}
              fit={FitTypes.none}></Image>
          </div>
          <FatBreak />
        </FatBorder>
          <div style={{width: width - 2 * carouselBorder, marginLeft: carouselBorder, marginRight: carouselBorder}}>
          <Carousel showStatus={false} showThumbs={false}>
            <div>
                <img src='assets/images/global/y_mount_top.jpg' />
                <p className={classnames('post-1')}>Legend 1</p>
            </div>
            <div>
                <img src='assets/images/global/y_mount_top.jpg' />
                <p className={classnames('post-2')}>Legend 2</p>
            </div>
            <div>
                <img src='assets/images/global/y_mount_top.jpg' />
                <p className={classnames('post-3')}>Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    )
    // Need title on page
    // https://codepen.io/leandrowd/pen/xLvOPd
    // https://www.npmjs.com/package/react-responsive-carousel
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
