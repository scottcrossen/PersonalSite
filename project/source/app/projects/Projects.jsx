// @flow

import {connect} from 'react-redux'
import {Image, FitTypes} from 'app/util/Image'
import {ImageHeader} from 'app/util/ImageHeader'
import {Link, Switch, Route} from 'react-router-dom'
import {loadProjectsCommand} from 'app/actions/HttpAction'
import {MarkdownPage} from 'app/util/MarkdownPage'
import {type Dispatch} from 'redux'
import {type StoreState} from 'app/state/index'
import {withRouter} from 'react-router-dom'
import classnames from 'classnames'
import React from 'react'
import type {Project} from 'app/state/HttpState'
import _ from 'underscore'

import styles from 'styles/projects/_projects.scss'

type OwnProps = {
}
type StateProps = {
  projects: Array<Project>
}
type DispatchProps = {
  loadProjects: void => Promise<*>
}
type Props = OwnProps & StateProps & DispatchProps
type SessionMatchProps = {
  match: {
    params: {
      index: string
    }
  }
}

class Projects extends React.Component<Props>{

  render = (): React$Element<*> => {
    const projectElements: Array<React$Node> = this.props.projects.map((project: Project, index: number) =>
      <Link to={`/projects/${index}`} key={index}>
        <Image source={project.image} fit={FitTypes.none}/>
        <h2>{project.title}</h2>
      </Link>
    )
    const indexPage = () => (
      <div className={classnames('projects')}>
        <ImageHeader
          title='Projects'
          source={require('assets/images/global/ecs_lab_2.jpg')}
        />
        <div className={classnames('project-list-aligner')} >
          <div className={classnames('project-list')} >
            {projectElements}
          </div>
        </div>
      </div>
    )
    return (
      <Switch>
        <Route path='/projects/:index(\d*)' component={(matchProps: SessionMatchProps) => {
          const matchedProject: Project = _.find(this.props.projects, (projects: Project) => projects.order == parseInt(matchProps.match.params.index))
          return (matchedProject) ? (
            <MarkdownPage
              image={matchedProject.image}
              title={matchedProject.title}
              content={matchedProject.content}
            />
          ) : (
            indexPage()
          )
        }} />
        <Route path='/projects' component={indexPage} />
      </Switch>
    )
  }

  componentDidMount = (): void => {
    if (this.props.projects) {
      this.props.loadProjects()
    }
  }
}

const mapStateToProps = (storeState: StoreState, ownProps: OwnProps): StateProps & OwnProps => {
  return {projects: storeState.http.projects, ...ownProps}
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  loadProjects: loadProjectsCommand(dispatch, ownProps),
})
const composedComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects))

export {composedComponent as Projects}
