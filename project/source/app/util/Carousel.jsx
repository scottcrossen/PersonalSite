// @flow

import React from 'react'
import {Carousel as OldCarousel} from 'react-responsive-carousel'

import styles_1 from 'styles/util/_carousel.scss'
import styles_2 from 'react-responsive-carousel/lib/styles/carousel.min.css'

type Props = {
  children?: React$Node,
}

export class Carousel extends React.Component<Props>{

  render = (): React$Element<*> => (
      <OldCarousel className='custom-carousel' showStatus={false} showThumbs={false} autoPlay={true}>
        {this.props.children}
      </OldCarousel>
  )
}
