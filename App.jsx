 import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Todos from "../pages/Todos"
import ProtectedRoute from "../routes/ProtectedRoute"

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}