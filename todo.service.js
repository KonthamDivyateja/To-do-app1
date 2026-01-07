import { db } from "../firebase/firebase"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"

export const addTodo = (uid, title) =>
  addDoc(collection(db, "todos"), {
    uid,
    title,
    completed: false,
  })

export const getTodos = async (uid) => {
  const snapshot = await getDocs(collection(db, "todos"))
  return snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((t) => t.uid === uid)
}

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data)

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id))