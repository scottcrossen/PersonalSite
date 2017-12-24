// @flow

import {Carousel} from 'app/util/Carousel'
import {FatBorder} from 'app/util/FatBorder'
import {FatBreak} from 'app/util/FatBreak'
import {Image, FitTypes} from 'app/util/Image'
import {ImageHeader} from 'app/util/ImageHeader'
import classnames from 'classnames'
import React from 'react'
import {loadPostsCommand} from 'app/actions/HttpAction'
import {connect} from 'react-redux'
import {type StoreState} from 'app/state/index'
import {type Dispatch} from 'redux'
import type {Post} from 'app/state/HttpState'

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

class Posts extends React.Component<Props>{

  render = (): React$Element<*> => {
    const postElements: Array<React$Node> = this.props.posts.map((post: Post, index: number) =>
      <div key={index}>
        <img src={post.image} />
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
    return (
      <div className={classnames('posts')}>
        <ImageHeader
          title='Blog Posts'
          source={require('assets/images/global/y_mount_top.jpg')}
        />
        {CarouselNotEmpty}
      </div>
    )
  }

  componentDidMount = (): void => {
    this.props.loadPosts()
  }
}

const mapStateToProps = (storeState: StoreState, ownProps: OwnProps): StateProps & OwnProps => {
  return {posts: storeState.http.posts, ...ownProps}
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  loadPosts: loadPostsCommand(dispatch, ownProps),
})
const composedComponent = connect(mapStateToProps, mapDispatchToProps)(Posts)

export {composedComponent as Posts}
