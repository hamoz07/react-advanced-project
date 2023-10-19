/* eslint-disable react/prop-types */
//! icons
import { CheckIcon } from "@heroicons/react/24/solid";
import { useState,useEffect } from "react";

const EditTask = ({ changeTodo, editTodo,closeEdit }) => {
  const [changeTask, setchangeTask] = useState(changeTodo.todoName);

  const handleForm = (action) => {
    action.preventDefault();
    editTodo({...changeTodo,todoName:changeTask});
  };

  useEffect(()=>{

    const esacpeState = (e)=>{
      e.key === "Escape" && closeEdit()
    }

    
    window.addEventListener("keydown",esacpeState)


    return () => {
      window.removeEventListener('keydown', esacpeState)
      
    }
  },[closeEdit])


  return (
    <div 
        role="dialog"
        aria-labelledby="editTask"
        onClick={(e)=>{e.target === e.currentTarget && closeEdit()}}
        
        >
      <form onSubmit={handleForm} className="todoform">
        <div className="wrapper">
          <input
            type="text"
            onInput={(e) => setchangeTask(e.target.value)}
            value={changeTask}
            maxLength={50}
            placeholder="change your task"
            id="editTask"
            required
            className="input"
            autoFocus
          />
          <label htmlFor="editTask" className="label">
            change your task
          </label>
        </div>
        <button type="submit" aria-label="change task" className="btn">
          <CheckIcon />
        </button>
      </form>
    </div>
  );
};

export default EditTask;
