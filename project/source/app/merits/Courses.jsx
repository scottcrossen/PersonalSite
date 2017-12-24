// @flow

import classnames from 'classnames'
import React from 'react'
import {ImageHeader} from 'app/util/ImageHeader'
import {MarkdownHolder} from 'app/util/MarkdownHolder'

type Props = {
  content: string
}

export class Courses extends React.Component<Props>{

  render = (): React$Element<*> => (
    <div className={classnames('courses')}>
      <ImageHeader
        title='Courses'
        source={require('assets/images/global/uofu_physics_3.jpg')}
      />
      <MarkdownHolder>{this.props.content}</MarkdownHolder>
    </div>
  )
}
