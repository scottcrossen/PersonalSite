// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'
import _ from 'underscore'
import transform from 'css-to-react-native'

import styles_2 from 'github-markdown-css/github-markdown.css'
import styles_1 from 'styles/util/_markdown-holder.scss'

type Props = {
  children?: React$Node,
}

export class MarkdownHolder extends React.Component<Props>{

  render = (): React$Element<*> => (<div className='markdown-holder'>
    <ReactMarkdown
      escapeHtml={true}
      className='markdown-body'
      renderers={{
        html: (args) => {
          const parser = new DOMParser()
          const child = parser.parseFromString(args.value,'text/xml').firstChild
          if (child) {
            return customHTMLRenderer(child)
          } else {
            return null
          }
        },
        table: (args) => {
          return <div className='table-aligner'><table>{args.children}</table></div>
        }
      }}
    >{this.props.children}</ReactMarkdown>
  </div>)
}

type Attributes = {
  length: number,
  item: (number) => Object,
  getNamedItem: (string) => Object
} | * // Sometimes flow needs some fudging

const customHTMLRenderer = (htmlNode, key: ?number): React$Node => {
  const escapedElement: React$Node = <p>{new XMLSerializer().serializeToString(htmlNode)}</p>
  const name: string = htmlNode.nodeName
  //console.log(`Processing html element found in markdown ${name}`)
  // whitelisted tags
  if((name == 'img' || name == 'center' || name == 'br' || name == 'h1' || name == 'h2' || name == 'h3' || name == 'p') && htmlNode.attributes != undefined) {
    const attributes: Attributes = htmlNode.attributes
    if (_.every(_.range(attributes.length ? attributes.length : 0), (index) => {
      // whitelisted attributes
      return (attributes.item(index).name == 'src' || attributes.item(index).name == 'style')
    })) {
      const srcObject = attributes.getNamedItem('src')
      const src = srcObject ? srcObject.value : null
      const styleObject = attributes.getNamedItem('style')
      const style = styleObject ? styleObject.value : null
      const children = _.map(htmlNode.childNodes, (node, index) => customHTMLRenderer(node, index))
      const reactStyle = style ? transform(style
          .split(';')
          .filter((clause: string) => clause)
          .map((clause: string) => clause
              .split(':')
              .map((clauseSegment) => clauseSegment.trim())
          )
      ) : null
      switch (name) {
        case 'img':
          return children.length == 0 ? (
            <a
              href={src}
              key={key}
            ><img
              src={src}
              style={reactStyle}
            /></a>
          ) : escapedElement
        case 'br':
          return src ? escapedElement : (
            <br
              style={reactStyle}
              key={key}
            />
          )
        case 'center':
          return src ? escapedElement : (
            <center
              style={reactStyle}
              key={key}
            >
              {children}
            </center>
          )
        case 'h1':
          return src ? escapedElement : (
            <h1
              style={reactStyle}
              key={key}
            >
              {children}
            </h1>
          )
        case 'h2':
          return src ? escapedElement : (
            <h2
              style={reactStyle}
              key={key}
            >
              {children}
            </h2>
          )
        case 'h3':
          return src ? escapedElement : (
            <h3
              style={reactStyle}
              key={key}
            >
              {children}
            </h3>
          )
        case 'p':
          return src ? escapedElement : (
            <p
              style={reactStyle}
              key={key}
            >
              {children}
            </p>
          )
        default:
          return escapedElement
      }
    } else {
      return escapedElement
    }
  } else if (name == '#text') {
    return htmlNode.nodeValue
  } else {
    return escapedElement
  }
}
