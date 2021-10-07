import { useState } from "react"
import { auth, db } from "api/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

import { doc, getDoc, setDoc } from "firebase/firestore"

const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider()

  const [user, setUser] = useState()

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user
      const userRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(userRef)
      if (docSnap.exists()) {
        setUser(docSnap.data())
      } else {
        const userData = {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email
        }
        await setDoc(userRef, userData)
        setUser(userData)
      }
    } catch (err) {
      console.error(err.message)
      alert(err.message)
    }
  }

  const logout = () => {}

  return {
    user,
    signInWithGoogle,
    logout
  }
}
export default useFirebase
