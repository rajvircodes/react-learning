import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
function App() {
  // In App.js — temporary hardcoded data to test with
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Todo App" },
    { id: 3, text: "Master useState" },
  ]
  return (
    <div className="container">
      <h1>My Todos</h1>
      <TodoInput onAdd={(todos) => todos.map((todo)=> <li key={todo.id}>{todo.text}</li>)} />
      <TodoList todos={todos}/>
    </div>
  )
}

export default App