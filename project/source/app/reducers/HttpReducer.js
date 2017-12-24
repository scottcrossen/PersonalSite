// @flow

import {type Action, ActionTypes} from 'app/actions/HttpAction'
import {type State} from 'app/state/HttpState'

const initialState = {
  merits: {
    degrees: null,
    courses: null,
    experience: null,
  },
  posts: []
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.set: {
      const merits: Object = Object.assign({},
        state.merits,
        action.data.degrees ? {degrees: action.data.degrees} : {},
        action.data.courses ? {courses: action.data.courses} : {},
        action.data.experience ? {experience: action.data.experience} : {},
      )
      return Object.assign({}, state,
        merits ? {merits: merits}: {},
        action.data.posts ? {posts: action.data.posts} : {}
      )
    }
    default:
      return state
  }
}
