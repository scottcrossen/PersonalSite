// @flow

export type State = {
  merits: {
    courses: ?string,
    experience: ?string,
    degrees: ?string,
  },
  posts: Array<Post>
}

export type Post = {
  title: string,
  order: number,
  image: string,
  description: string,
  content: string,
}
