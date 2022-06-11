import React, { useState} from 'react';
import './App.css';
import AddItemForm from "./AddItemForm";
import {v1} from "uuid";
import Task from "./Task";


export type newTaskType={
    id:string
    title:string,
    isDone:boolean
}

function App() {
    let [tasks, setTasks] =useState<Array<any>>([])

    let[number,setNumber]= useState<number>(0)

    let[filter,setFilter]=useState<string>('all')

    
    const changeFilter =(filter:string)=>{
        setFilter(filter)
    }

    const addTask=(title:string)=>{
        if(title) {
            const newTask:newTaskType = {
                id: v1(), title, isDone:false
            }
            setTasks([...tasks, newTask])
        }
    }

    const deleteTaskHandler= ()=>{
        setTasks([...tasks.filter(t => t.isDone !== true)])
    }

    const changeStatusTask =(id:string,isDone:boolean)=>{
        let arr =[...tasks.map(t => t.id === id ?{...t,isDone: isDone} : t)]
        let activeTasks = [...arr.filter(t => t.isDone ===false)]
        setTasks(arr)
        setNumber(activeTasks.length)  
    }

   
let filterTasks = [...tasks]
let newTask =filterTasks
 if(filter ==="active"){
    newTask=  filterTasks.filter(t=>t.isDone === false )
}
else if(filter ==="completed"){
    newTask=  filterTasks.filter(t=>t.isDone === true )
}

console.log(tasks)
  return (

    <div className="App">
        <div className="logo">
            <h1>todos</h1>
        </div>
        <AddItemForm addTask={addTask}/>
        <div className="list">
            {  
               newTask.map(task =>{ return <Task  changeStatusTask={changeStatusTask} task={task} /> })
              
               }
        </div>

        <div className={"menu"}>
            <div className='sum'>{number  }  active task</div>
            <div>
                <span className={filter ==="all"? "active": ''}  onClick={()=>changeFilter('all')}  >All</span>
                <span className={filter ==="active"? "active": ''} onClick={()=>changeFilter('active')}>Active</span>
                <span className={filter ==="completed"? "active": ''} onClick={()=>changeFilter('completed')} >Completed</span>
            </div>
            <div>
                <span  onClick={deleteTaskHandler}>clear completed</span>
            </div>
        </div>

    </div>
  );
}

export default App;
