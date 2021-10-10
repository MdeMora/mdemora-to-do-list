import { auth, db } from "api/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import URL from "constants/navigation"
import { USER_DATA_KEY } from "constants/locasStorage"

// constants
const SIGN_IN_WITH_GOOGLE = "signInWithGoogle"
const SIGN_OUT = "signOut"
const LOCAL_USER = "localUser"

const googleProvider = new GoogleAuthProvider()

const INITIAL_DATA = {}
// reducer
const userReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE:
      return { ...state, user: action.payload }
    case SIGN_OUT:
      return { ...state, user: action.payload }
    case LOCAL_USER:
      return { ...state, user: action.payload }

    default:
      return state
  }
}
// action

export const signInWithGoogleAction = history => async dispatch => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const userRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(userRef)

    if (!docSnap.exists()) {
      const userData = {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email
      }
      await setDoc(userRef, userData)
    }

    localStorage.setItem(USER_DATA_KEY, user.uid)
    history && history.push(URL.APP)
    return dispatch({
      type: SIGN_IN_WITH_GOOGLE,
      payload: docSnap.data()
    })
  } catch (err) {
    console.error(err.message)
  }
}

export const signOutAction = history => async dispatch => {
  auth.signOut()
  history && history.push(URL.HOME)
  localStorage.removeItem(USER_DATA_KEY)
  dispatch({
    type: SIGN_OUT,
    payload: undefined
  })
}

export const getLocalUserAction = () => async dispatch => {
  const userKey = localStorage.getItem(USER_DATA_KEY)
  if (!userKey) {
    return dispatch({
      type: LOCAL_USER,
      payload: null
    })
  }
  const userRef = doc(db, "users", userKey)
  const userDoc = await getDoc(userRef)

  dispatch({
    type: LOCAL_USER,
    payload: userDoc.data()
  })
}

export default userReducer
