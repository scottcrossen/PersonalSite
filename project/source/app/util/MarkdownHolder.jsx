// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'

import styles_1 from 'styles/util/_markdown-holder.scss'
import styles_2 from 'github-markdown-css/github-markdown.css'

type Props = {
  children?: React$Node,
}

export class MarkdownHolder extends React.Component<Props>{

  render = (): React$Element<*> => (<div className='markdown-holder'>
    <ReactMarkdown className='markdown-body'>{this.props.children}</ReactMarkdown>
  </div>)
}
