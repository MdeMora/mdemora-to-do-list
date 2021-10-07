/* eslint-disable no-undef */
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "mdemora-to-to-list.firebaseapp.com",
  projectId: "mdemora-to-to-list",
  storageBucket: "mdemora-to-to-list.appspot.com",
  messagingSenderId: "717579202460",
  appId: "1:717579202460:web:7c0d2b72e7252d00b3a259"
}

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db }
