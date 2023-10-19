// custom localStorage hook

import useLocalData from './customHooks/useLocalData.jsx'

import { useState } from "react";
import TodoForm from "./components/form";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";

function App() {
  const [count, setCount] = useLocalData("allDataPassed",[]);
  const [ActivateEl,setActivateEl] =  useState(null);
  const [todoHandler,setTodoHandler] =  useState(null);
  const [edit,isEditing] =  useState(false);

  const addTask = (a) => {
    setCount((all) => [...all, a]);
  };

  const sheetdel = (idd) => {
    setCount((all) => all.filter((each) => each.id !== idd));
  };

  const changeObjCheckState = (idd) => {
    setCount((all) =>
      all.map((each) => 
      (each.id === idd
         ?
          {...each,isCompleted:!each.isCompleted} :
           each)
      )
    );
  };

  const updateTaskName = (task) => {
    setCount(all =>
      all.map((each) => 
      (each.id === task.id
         ?
          {...each,todoName:task.todoName} :
           each
           )
      )
    );
    closeEditMode()
  };

  const closeEditMode = ()=>{
    isEditing(false)
    ActivateEl.focus()
  }

  const EnterEditMode = (task)=>{
    setTodoHandler(task)
    isEditing(true)
    setActivateEl(document.activeElement)
  }

  return (
    <div className="container">
      <header>
        <h1>My Todo List</h1>
      </header>
      {edit &&
      <EditTask
        changeTodo={todoHandler}
        editTodo={updateTaskName}
        closeEdit={closeEditMode}
       />
      
      }
      <TodoForm addTodo={addTask} />
      {count && (
        <TaskList
          tasks={count}
          deleteHndlr={sheetdel}
          changeObjCheckState={changeObjCheckState}
          getEditMode={EnterEditMode}
        />
      )}
    </div>
  );
}

export default App;
