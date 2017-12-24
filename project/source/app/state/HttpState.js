// @flow

export type State = {
  merits: {
    courses: ?string,
    experience: ?string,
    degrees: ?string,
    other: ?string,
  },
  posts: Array<Post>,
  projects: Array<Project>,
  about: ?string,
}

export type Post = {
  description: string,
} & Project

export type Project = {
  title: string,
  order: number,
  image: string,
  description: string,
  content: string,
}
