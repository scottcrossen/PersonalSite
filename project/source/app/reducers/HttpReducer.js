// @flow

import {type Action, ActionTypes} from 'app/actions/HttpAction'
import {type State} from 'app/state/HttpState'

const initialState = {
  merits: {
    degrees: null,
    courses: null,
    experience: null,
    other: null,
  },
  posts: [],
  projects: [],
  about: null
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.set: {
      const merits: Object = Object.assign({},
        state.merits,
        action.data.degrees ? {degrees: action.data.degrees} : {},
        action.data.courses ? {courses: action.data.courses} : {},
        action.data.experience ? {experience: action.data.experience} : {},
        action.data.otherMerits ? {other: action.data.otherMerits} : {},
      )
      return Object.assign({}, state,
        merits ? {merits: merits}: {},
        action.data.posts ? {posts: action.data.posts} : {},
        action.data.projects ? {projects: action.data.projects} : {},
        action.data.about ? {about: action.data.about} : {},
      )
    }
    default:
      return state
  }
}
