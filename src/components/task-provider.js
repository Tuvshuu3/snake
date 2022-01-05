import React, { useState } from 'react'

const TaskContext = React.createContext({
    tasks: [],
    addTask: () => {},
    deleteTask: () =>{}
})

 const TaskProvider = ({children}) => {
     const [tasks, setTasks] = useState([]);
     const addTask =  ({name}) => {
        //  setT
     }
     const deleteTask =  ({id}) => {
         //setTask
    }
     return (
         <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
             {children} 
         </TaskContext.Provider>
     )
 }

 export { TaskProvider, TaskContext}