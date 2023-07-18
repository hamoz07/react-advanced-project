import Todo from './Todo.jsx'
import styles from './TasksHolder.module.css'

const TaskList = ({tasks,deleteHndlr,changeObjCheckState , getEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a,b)=> b.id - a.id).map((task) => (
        <Todo 
            key={task.id}
            task={task}
            deleteHndlr={deleteHndlr}
            changeObjCheckState ={changeObjCheckState}
            getEditMode={getEditMode}
        />
    ))
    }
    </ul>
  )
}

export default TaskList
