import { auth } from "../firebase/firebase"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

export const signupUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const logoutUser = () => signOut(auth)