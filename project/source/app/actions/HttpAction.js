// @flow

import type {Dispatch} from 'redux'
import type {Post} from 'app/state/HttpState'
import _ from 'underscore'


export const ActionTypes = {
  set: 'SET',
}

export type ActionType = $Keys<typeof ActionTypes>

export type Action = {
  data: {
    merits: string
  },
  type: ActionType,
}

export const loadDegreesCommand = (dispatch: Dispatch, ownProps: Object): (void => Promise<string>) => {
  return () => {
    console.log("Loading degrees")
    return fetch(require('assets/merits/degrees.md'))
    .then((response: Object): Promise<string> => {
      if (response.status >= 400) {
        return Promise.reject("Bad response from server")
      }
      return response.text()
    }).then((degrees: string) => {
      dispatch({
        type: ActionTypes.set,
        data: {
          degrees: degrees
        }
      })
      return degrees
    })
  }
}
export const loadCoursesCommand = (dispatch: Dispatch, ownProps: Object): (void => Promise<string>) => {
  return () => {
    console.log("Loading courses")
    return fetch(require('assets/merits/courses.md'))
    .then((response: Object): Promise<string> => {
      if (response.status >= 400) {
        return Promise.reject("Bad response from server")
      }
      return response.text()
    }).then((courses: string) => {
      dispatch({
        type: ActionTypes.set,
        data: {
          courses: courses
        }
      })
      return courses
    })
  }
}
export const loadExperienceCommand = (dispatch: Dispatch, ownProps: Object): (void => Promise<string>) => {
  return () => {
    console.log("Loading experience")
    return fetch(require('assets/merits/experience.md'))
    .then((response: Object): Promise<string> => {
      if (response.status >= 400) {
        return Promise.reject("Bad response from server")
      }
      return response.text()
    }).then((experience: string) => {
      dispatch({
        type: ActionTypes.set,
        data: {
          experience: experience
        }
      })
      return experience
    })
  }
}
export const loadOtherMeritsCommand = (dispatch: Dispatch, ownProps: Object): (void => Promise<string>) => {
  return () => {
    console.log("Loading other merits")
    return fetch(require('assets/merits/other.md'))
    .then((response: Object): Promise<string> => {
      if (response.status >= 400) {
        return Promise.reject("Bad response from server")
      }
      return response.text()
    }).then((otherMerits: string) => {
      dispatch({
        type: ActionTypes.set,
        data: {
          otherMerits: otherMerits
        }
      })
      return otherMerits
    })
  }
}
export const loadAboutMeCommand = (dispatch: Dispatch, ownProps: Object): (void => Promise<string>) => {
  return () => {
    console.log("Loading about-me")
    return fetch(require('assets/about/about.md'))
    .then((response: Object): Promise<string> => {
      if (response.status >= 400) {
        return Promise.reject("Bad response from server")
      }
      return response.text()
    }).then((about: string) => {
      dispatch({
        type: ActionTypes.set,
        data: {
          about: about
        }
      })
      return about
    })
  }
}

type PostManifestItem = {
  title: string,
  order: 0,
  image: string,
  description: string,
  file: string,
}

export const loadPostsCommand = (dispatch: Dispatch, ownProps: Object): (void => Promise<Array<Post>>) => {
  return () => {
    console.log("Loading post index")
    return fetch(require('assets/posts/index.json'))
    .then((response: Object): Promise<Array<PostManifestItem>> => {
      if (response.status >= 400) {
        return Promise.reject("Bad response from server")
      }
      return response.json()
    }).then((manifest: Array<PostManifestItem>): Promise<Array<Post>> => {
      console.log("Loading posts")
      return Promise.all(
        manifest.map((item: PostManifestItem) => fetch(item.file).then((response: Object): Promise<Post> => {
          if (response.status >= 400) {
            return Promise.reject("Bad response from server")
          }
          return response.text().then((content: string) => ({
            title: item.title,
            order: item.order,
            image: item.image,
            description: item.description,
            content: content,
          }))
        })
      ))
    }).then((posts: Array<Post>) => {
      const sortedPosts: Array<Post> = _.sortBy(posts, (post: Post) => 0 - post.order)
      dispatch({
        type: ActionTypes.set,
        data: {
          posts: sortedPosts
        }
      })
      return posts
    })
  }
}

type ProjectManifestItem = {
  title: string,
  order: 0,
  image: string,
  file: string,
}

export const loadProjectsCommand = (dispatch: Dispatch, ownProps: Object): (void => Promise<Array<Post>>) => {
  return () => {
    console.log("Loading project index")
    return fetch(require('assets/projects/index.json'))
    .then((response: Object): Promise<Array<ProjectManifestItem>> => {
      if (response.status >= 400) {
        return Promise.reject("Bad response from server")
      }
      return response.json()
    }).then((manifest: Array<ProjectManifestItem>): Promise<Array<Post>> => {
      console.log("Loading projects")
      return Promise.all(
        manifest.map((item: ProjectManifestItem) => fetch(item.file).then((response: Object): Promise<Post> => {
          if (response.status >= 400) {
            return Promise.reject("Bad response from server")
          }
          return response.text().then((content: string) => ({
            title: item.title,
            order: item.order,
            image: item.image,
            content: content,
          }))
        })
      ))
    }).then((projects: Array<Post>) => {
      const sortedProject: Array<Post> = _.sortBy(projects, (projects: Post) => 0 - projects.order)
      dispatch({
        type: ActionTypes.set,
        data: {
          projects: sortedProject
        }
      })
      return projects
    })
  }
}
