import { useState } from 'react'
import { TodoProvider } from './context/ToDo.js'
import ToDoForm from './Components/ToDoForm.jsx'
import ToDoItem from './Components/ToDoItem.jsx';

function App() {
  const [Todos, setTodos] = useState([]);

  const addMsg = (todo)=>{
    setTodos((prev)=>[{id:Date.now,...todo},...prev])
  }

  const deleteMsg = (id)=>{
    setTodos((prev) => prev.filter((todo)=>todo.id != id));
  }

  const updateMsg = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const toggleMsg= (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  return (
    <TodoProvider value={{Todos,addMsg ,deleteMsg,toggleMsg,updateMsg}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {Todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <ToDoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
