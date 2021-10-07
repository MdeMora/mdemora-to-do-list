import { db } from "api/firebase"
import { collection, query } from "firebase/firestore"

// constants
const UPDATE = "update"
const GET = "get"

const INITIAL_DATA = {
  tasks: []
}
// reducer
const taskReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, tasks: action.payload }
    default:
      return state
  }
}
// action (thunk)

// eslint-disable-next-line no-unused-vars
export const getTasksAction = () => async (dispatch, getState) => {
  const result = await query(collection(db, "tasks"))
  console.log(result)
  return dispatch({
    type: GET,
    payload: result.data()
  })
}

export default taskReducer
