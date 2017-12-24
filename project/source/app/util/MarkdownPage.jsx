// @flow

import classnames from 'classnames'
import React from 'react'
import {ImageHeader} from 'app/util/ImageHeader'
import {MarkdownHolder} from 'app/util/MarkdownHolder'

type Props = {
  image: string,
  title: string,
  content: string
}

export class MarkdownPage extends React.Component<Props>{

  render = (): React$Element<*> => (
    <div>
      <ImageHeader
        title={this.props.title}
        source={this.props.image}
      />
      <MarkdownHolder>{this.props.content ? this.props.content : ''}</MarkdownHolder>
    </div>
  )
}
