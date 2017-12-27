// @flow

import {Carousel} from 'app/util/Carousel'
import {connect} from 'react-redux'
import {FatBorder} from 'app/util/FatBorder'
import {FatBreak} from 'app/util/FatBreak'
import {Image, FitTypes} from 'app/util/Image'
import {ImageHeader} from 'app/util/ImageHeader'
import {Link, Switch, Route} from 'react-router-dom'
import {loadPostsCommand} from 'app/actions/HttpAction'
import {MarkdownPage} from 'app/util/MarkdownPage'
import {type Dispatch} from 'redux'
import {type StoreState} from 'app/state/index'
import classnames from 'classnames'
import React from 'react'
import type {Post} from 'app/state/HttpState'
import {withRouter} from 'react-router-dom'
import _ from 'underscore'

import styles from 'styles/posts/_posts.scss'

type OwnProps = {
}
type StateProps = {
  posts: Array<Post>
}
type DispatchProps = {
  loadPosts: void => Promise<*>
}
type Props = OwnProps & StateProps & DispatchProps
type SessionMatchProps = {
  match: {
    params: {
      index: string
    }
  }
}

class Posts extends React.Component<Props>{

  render = (): React$Element<*> => {
    const postElements: Array<React$Node> = this.props.posts.map((post: Post, index: number) =>
      <div key={index}>
        <div className={classnames('click-box')}><Link to={`/posts/${post.order}`} /></div>
        <Image source={post.image} fit={FitTypes.none}/>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    )
    const CarouselNotEmpty: React$Node = (postElements.length) ? (
      <div className={classnames('posts-slide')}>
        <Carousel>
          {postElements}
        </Carousel>
      </div>
    ) : (
      <div className={classnames('posts-loading')}>
        <h2>Loading Posts...</h2>
      </div>
    )
    const indexPage = () => (
      <div className={classnames('posts')}>
        <ImageHeader
          title='Blog Posts'
          source={require('assets/images/global/y_mount_top.jpg')}
        />
        {CarouselNotEmpty}
      </div>
    )
    return (
      <Switch>
        <Route path='/posts/:index(\d*)' component={(matchProps: SessionMatchProps) => {
          const matchedPost: Post = _.find(this.props.posts, (post: Post) => post.order == parseInt(matchProps.match.params.index))
          return (matchedPost) ? (
            <MarkdownPage
              image={matchedPost.image}
              title={matchedPost.title}
              content={matchedPost.content}
            />
          ) : (
            indexPage()
          )
        }} />
        <Route path='/posts' component={indexPage} />
      </Switch>
    )
  }

  componentDidMount = (): void => {
    if (!this.props.posts.length) {
      console.log(this.props.posts)
      this.props.loadPosts()
    }
  }
}

const mapStateToProps = (storeState: StoreState, ownProps: OwnProps): StateProps & OwnProps => {
  return {posts: storeState.http.posts, ...ownProps}
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  loadPosts: loadPostsCommand(dispatch, ownProps),
})
const composedComponent = withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))

export {composedComponent as Posts}
