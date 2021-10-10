import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import userReducer, { getLocalUserAction } from "redux/ducks/userDuck"
import taskReducer from "redux/ducks/taskDuck"
import thunk from "redux-thunk"

let rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// @Mdemora: Dev Store. For production store create generateProductionStore without redux dev tools
const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  getLocalUserAction()(store.dispatch)
  return store
}

export default generateStore
