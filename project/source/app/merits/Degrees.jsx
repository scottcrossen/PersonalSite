// @flow

import classnames from 'classnames'
import React from 'react'
import {ImageHeader} from 'app/util/ImageHeader'
import {MarkdownHolder} from 'app/util/MarkdownHolder'

type Props = {
  content: string
}

export class Degrees extends React.Component<Props>{

  render = (): React$Element<*> => (
    <div className={classnames('degrees')}>
      <ImageHeader
        title='Degrees'
        source={require('assets/images/global/byu_sign_1.jpg')}
      />
      <MarkdownHolder>{this.props.content}</MarkdownHolder>
    </div>
  )
}
