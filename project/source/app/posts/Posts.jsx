import React from 'react'
import {FatBorder} from 'app/util/FatBorder.jsx'
import {Image, FitTypes} from 'app/util/Image'
import {FatBreak} from 'app/util/FatBreak.jsx'

type Props = {
}

type State = {
  width: number,
  height: number,
}

export class Posts extends React.Component<Props, State>{

  render = (): React$Element<*> => {
    const {height} = this.state
    const {children} = this.props
    const imageHeight = height * 0.3
    return (
      <FatBorder>
        <div style={{height: imageHeight}}>
          <Image source={require('assets/images/global/y_mount_top.jpg')}
            fit={FitTypes.none} />
        </div>
        <FatBreak />
      </FatBorder>
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
