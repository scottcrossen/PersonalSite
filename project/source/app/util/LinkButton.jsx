// @flow

import React from 'react'
import classnames from 'classnames'
import {Link} from 'react-router-dom'

import styles from 'styles/util/_link-button.scss'

type Props = {
  text: string,
  link: string,
  className?: string,
}

export const LinkButton = (props: Props): React$Element<*> => (
  <Link className={classnames('link-button', props.className)} to={props.link}><h3>{props.text}</h3></Link>
)

export default LinkButton
