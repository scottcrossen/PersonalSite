// @flow

import classnames from 'classnames'
import React from 'react'
import {loadCoursesCommand, loadDegreesCommand, loadExperienceCommand} from 'app/actions/HttpAction'
import {connect} from 'react-redux'
import {type StoreState} from 'app/state/index'
import {type Dispatch} from 'redux'
import {Link, Switch, Route} from 'react-router-dom'
import {Degrees} from 'app/merits/Degrees'
import {Courses} from 'app/merits/Courses'
import {Experience} from 'app/merits/Experience'
import {withRouter} from 'react-router-dom'
import {ImageHeader} from 'app/util/ImageHeader'

import styles from 'styles/merits/_merits.scss'

type OwnProps = {
}
type StateProps = {
  courses: string,
  experience: string,
  degrees: string,
}
type DispatchProps = {
  loadCourses: void => Promise<string>,
  loadDegrees: void => Promise<string>,
  loadExperience: void => Promise<string>,
}
type Props = OwnProps & StateProps & DispatchProps

class Merits extends React.Component<Props>{

  render = (): React$Element<*> => {
    return <Switch>
      <Route path='/merits/degrees' component={() =>
        <Degrees
          content={this.props.degrees}
        />
      } />
      <Route path='/merits/experience' component={() =>
        <Experience
          content={this.props.experience}
        />
      } />
      <Route path='/merits/courses' component={() =>
        <Courses
          content={this.props.courses}
        />
      } />
      <Route path='/merits' component={() =>
        <div className={classnames('merits')}>
          <ImageHeader
            title='Merits'
            source={require('assets/images/global/y_mount_top.jpg')}
          />
          <div className={classnames('merit-links')} >
            <Link to='/merits/degrees'><button>My Degrees</button></Link>
            <Link to='/merits/experience'><button>My Work Experience</button></Link>
            <Link to='/merits/courses'><button>Courses I've Taken</button></Link>
          </div>
        </div>
      } />
    </Switch>
  }

  componentDidMount = (): void => {
    console.log("Loading merits page")
    if (!this.props.experience) {
      this.props.loadExperience()
    }
    if (!this.props.degrees) {
      this.props.loadCourses()
    }
    if (!this.props.experience) {
      this.props.loadDegrees()
    }
  }
}

const mapStateToProps = (storeState: StoreState, ownProps: OwnProps): StateProps & OwnProps => {
  const {courses, degrees, experience} = storeState.http.merits
  return {courses, degrees, experience, ...ownProps}
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  loadCourses: loadCoursesCommand(dispatch, ownProps),
  loadDegrees: loadDegreesCommand(dispatch, ownProps),
  loadExperience: loadExperienceCommand(dispatch, ownProps),
})
const composedComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(Merits))

export {composedComponent as Merits}
