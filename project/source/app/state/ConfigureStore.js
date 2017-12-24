// @flow

import {createStore, applyMiddleware, type Store, type Dispatch, type Reducer} from 'redux'
import rootReducer from 'app/reducers'
import {StoreState} from 'app/state/index'

export const configureStore = (initialState: Object = {}) => {
  const store: Store = createStore(
   rootReducer,
   initialState
  )
  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextRootReducer = require('app/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
