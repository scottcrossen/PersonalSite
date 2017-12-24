// @flow

import classnames from 'classnames'
import React from 'react'
import {loadAboutMeCommand} from 'app/actions/HttpAction'
import {connect} from 'react-redux'
import {type StoreState} from 'app/state/index'
import {type Dispatch} from 'redux'
import {Link, Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {ImageHeader} from 'app/util/ImageHeader'
import {MarkdownPage} from 'app/util/MarkdownPage'

import styles from 'styles/merits/_merits.scss'

type OwnProps = {
}
type StateProps = {
  aboutMe: string,
}
type DispatchProps = {
  loadAbout: void => Promise<string>,
}
type Props = OwnProps & StateProps & DispatchProps

class AboutMe extends React.Component<Props>{

  render = (): React$Element<*> => (
    <MarkdownPage
      title='About Me'
      image={require('assets/images/global/steal_3.jpg')}
      content={this.props.aboutMe}
    />
  )

  componentDidMount = (): void => {
    if (!this.props.aboutMe) {
      this.props.loadAbout()
    }
  }
}

const mapStateToProps = (storeState: StoreState, ownProps: OwnProps): StateProps & OwnProps => {
  return {aboutMe: storeState.http.about, ...ownProps}
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  loadAbout: loadAboutMeCommand(dispatch, ownProps),
})
const composedComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutMe))

export {composedComponent as AboutMe}
