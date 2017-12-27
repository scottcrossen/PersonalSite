// @flow

import classnames from 'classnames'
import React from 'react'
import {loadCoursesCommand, loadDegreesCommand, loadExperienceCommand, loadOtherMeritsCommand} from 'app/actions/HttpAction'
import {connect} from 'react-redux'
import {type StoreState} from 'app/state/index'
import {type Dispatch} from 'redux'
import {Link, Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {ImageHeader} from 'app/util/ImageHeader'
import {MarkdownPage} from 'app/util/MarkdownPage'
import {LinkButton} from 'app/util/LinkButton'

import styles from 'styles/merits/_merits.scss'

type OwnProps = {
}
type StateProps = {
  courses: string,
  experience: string,
  degrees: string,
  other: string,
}
type DispatchProps = {
  loadCourses: void => Promise<string>,
  loadDegrees: void => Promise<string>,
  loadExperience: void => Promise<string>,
  loadOther: void => Promise<string>,
}
type Props = OwnProps & StateProps & DispatchProps

class Merits extends React.Component<Props>{

  render = (): React$Element<*> => {
    return <Switch>
      <Route path='/merits/degrees' component={() =>
        <MarkdownPage
          title='Degrees'
          image={require('assets/images/global/byu_sign_1.jpg')}
          content={this.props.degrees}
        />
      } />
      <Route path='/merits/experience' component={() =>
        <MarkdownPage
          title='Experience'
          image={require('assets/images/global/ecs_team_2.jpg')}
          content={this.props.experience}
        />
      } />
      <Route path='/merits/courses' component={() =>
        <MarkdownPage
          title='Courses'
          image={require('assets/images/global/uofu_physics_3.jpg')}
          content={this.props.courses}
        />
      } />
      <Route path='/merits/other' component={() =>
        <MarkdownPage
          title='Other Merits'
          image={require('assets/images/global/steal_3.jpg')}
          content={this.props.other}
        />
      } />
      <Route path='/merits' component={() =>
        <div className={classnames('merits')}>
          <ImageHeader
            title='Merits'
            source={require('assets/images/global/y_mount_top.jpg')}
          />
          <div className={classnames('merit-links')} >
            <LinkButton className='big-button' text='My Degrees' link='/merits/degrees' />
            <LinkButton className='big-button' text='My Work Experience' link='/merits/experience' />
            <LinkButton className='big-button' text={'Courses I\'ve Taken'} link='/merits/courses' />
            <LinkButton className='big-button' text='Other Accomplishments' link='/merits/other' />
          </div>
        </div>
      } />
    </Switch>
  }

  componentDidMount = (): void => {
    if (!this.props.experience) {
      this.props.loadExperience()
    }
    if (!this.props.degrees) {
      this.props.loadCourses()
    }
    if (!this.props.experience) {
      this.props.loadDegrees()
    }
    if (!this.props.other) {
      this.props.loadOther()
    }
  }
}

const mapStateToProps = (storeState: StoreState, ownProps: OwnProps): StateProps & OwnProps => {
  const {courses, degrees, experience, other} = storeState.http.merits
  return {courses, degrees, experience, other, ...ownProps}
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  loadCourses: loadCoursesCommand(dispatch, ownProps),
  loadDegrees: loadDegreesCommand(dispatch, ownProps),
  loadExperience: loadExperienceCommand(dispatch, ownProps),
  loadOther: loadOtherMeritsCommand(dispatch, ownProps),
})
const composedComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(Merits))

export {composedComponent as Merits}
