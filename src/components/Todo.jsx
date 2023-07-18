//! icons
import { CheckIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/outline'

// module
import Item from './ListItem.module.css'

// hooks
import { useState } from 'react'



const Todo = ({task,deleteHndlr,changeObjCheckState,getEditMode}) => {

      const [checker,IsChecker] = useState(task.isCompleted)


      const handleChecker = () => {
        IsChecker(!checker)
        changeObjCheckState(task.id)
      }



  return (
    <li className={Item.task}>
      <div className={Item.task_group}>
        <input 
            className={Item.checkbox}
            type="checkbox"
            checked={checker} 
            onChange={handleChecker}
            id={task.id} 
        />
        <label 
        htmlFor={task.id}
         className={Item.label}
         >
          {task.todoName}

          <p className={Item.checkmark}>
    
            <CheckIcon />

          </p>
         </label>
      </div>
      <div className={Item.task_group}>
        <button 
          className='btn'
          aria-label={`Edit ${task.todoName} task`}
          onClick={()=> getEditMode(task)}
        >

          <PencilIcon />

        </button>

        <button 
          className={`btn ${Item.delete}`}
          aria-label={`delete ${task.todoName} task`}
          onClick={()=> deleteHndlr(task.id)}
          >

          <TrashIcon />

        </button>
      </div>

    </li>
  )


  // const handleDel = (e)=>{
  //   console.log((e.target.getAttribute("aria-label")).slice(7,((task.todoName).length - 1)));
  //   console.log((task.todoName).length)
  // }

}

export default Todo
