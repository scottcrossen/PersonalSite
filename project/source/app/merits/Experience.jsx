// @flow

import classnames from 'classnames'
import React from 'react'
import {ImageHeader} from 'app/util/ImageHeader'
import {MarkdownHolder} from 'app/util/MarkdownHolder'

type Props = {
  content: string
}

export class Experience extends React.Component<Props>{

  render = (): React$Element<*> => (
    <div className={classnames('experience')}>
      <ImageHeader
        title='Experience'
        source={require('assets/images/global/ecs_team_2.jpg')}
      />
      <MarkdownHolder>{this.props.content}</MarkdownHolder>
    </div>
  )
}
