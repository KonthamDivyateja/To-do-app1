import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { addTodo, getTodos, updateTodo, deleteTodo } from "../services/todo.service"
import { Button } from "@/components/ui/button"

export default function Todos() {
  const { user, logoutUser } = useAuth()
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")

  const fetchTodos = async () => {
    const data = await getTodos(user.uid)
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleAdd = async () => {
    await addTodo(user.uid, title)
    setTitle("")
    fetchTodos()
  }

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Todos</h1>
        <Button onClick={logoutUser}>Logout</Button>
      </div>

      <input
        className="border p-2 mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAdd}>Add</Button>

      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-2 mt-3">
          <span>{todo.title}</span>
          <Button onClick={() => updateTodo(todo.id, { completed: !todo.completed })}>
            Toggle
          </Button>
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </div>
      ))}
    </div>
  )
}