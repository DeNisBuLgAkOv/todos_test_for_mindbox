import React, {ChangeEvent, useState} from "react";
import './App.css';

type AddItemFormProps={
    addTask:(title:string)=>void
}

function AddItemForm(props:AddItemFormProps){

    let [value,setValue] = useState<string>('')

    const changeTaskTitle =(event:ChangeEvent<HTMLInputElement>)=>{
        setValue( event.currentTarget.value)
    }

    const onClickAddHandler =()=>{
        props.addTask(value)
        setValue('')
    }

    return(
        <div className={"input_task"}>
            <input placeholder={"What needs to be done?"} value={value} onChange={changeTaskTitle}></input>
            <button  onClick={onClickAddHandler} >Add</button>
        </div>
    )
}
export default AddItemForm