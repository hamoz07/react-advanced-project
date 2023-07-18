//! icons
import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {


    const [todo,setTodo] = useState("")


    const handleForm = (action)=>{
        action.preventDefault()
        addTodo({
            todoName:todo,
            isCompleted : false,
            id:Date.now()
        })
        setTodo("")
    }

  return (
    <form
        className="todoform"
        onSubmit={handleForm}
    >
        <div className="wrapper">
            <input type="text" 
                onInput={(e) => setTodo(e.target.value)}
                value={todo}
                maxLength={50}
                placeholder="type your task"
                id="task"
                required
                className="input"
                autoFocus
            />
            <label htmlFor="task"
                className="label"
            >
                type your task</label>
        </div>
            <button 
                type="submit"
                aria-label="add task"
                className="btn"
            >
                <PlusIcon />
            </button>
    </form>
  )
}

export default TodoForm
