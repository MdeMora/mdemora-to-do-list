import { db } from "api/firebase"
import {
  collection,
  query,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore"

// constants
const GET = "get"
const ADD = "add"
const EDIT = "edit"
const DELETE = "delete"

const INITIAL_DATA = {
  tasks: [],
}

// reducer
const taskReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET:
      return { ...state, tasks: action.payload }
    case ADD:
      return { ...state, tasks: state.tasks.concat(action.payload) }
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task,
        ),
      }
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
      }
    default:
      return state
  }
}
// action (thunk)

export const addTaskAction = (user, newTask) => async dispatch => {
  const res = await addDoc(collection(db, `users/${user.uid}/tasks`), newTask)
  return dispatch({
    type: ADD,
    payload: { ...newTask, id: res.id },
  })
}

export const editTaskAction = (user, editedTask) => async dispatch => {
  await setDoc(
    doc(collection(db, `users/${user.uid}/tasks`), editedTask.id),
    editedTask,
  )
  return dispatch({
    type: EDIT,
    payload: editedTask,
  })
}

export const deleteTaskAction = (user, task) => async dispatch => {
  await deleteDoc(doc(collection(db, `users/${user.uid}/tasks`), task.id), task)
  return dispatch({
    type: DELETE,
    payload: task,
  })
}

export const getTasksAction = user => async dispatch => {
  const q = query(collection(db, `users/${user?.uid}/tasks`))
  const querySnapshot = await getDocs(q)

  console.log(querySnapshot.forEach(doc => doc.data()))

  const tasksList = []
  querySnapshot.forEach(doc => tasksList.push({ ...doc.data(), id: doc.id }))

  return dispatch({
    type: GET,
    payload: tasksList,
  })
}

export default taskReducer
