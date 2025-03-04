import { ChangeEvent, useState } from "react";
import { FilterValues } from "./App";
import { Button } from "./button";

type Props = {
  title: string;
  tasks: Task[];
  date?: string;
  delTasks: (id: string) => void;
  setFiltered: (filter: FilterValues) => void;
  addTask: (title:string) => void;
};
 export type Task = {
  id: string ;
  title: string;
  isDone: boolean;
};
export const TodolistItem = ({ title, tasks,delTasks,setFiltered,addTask }: Props) => {
  
  const [newTaskTitle,setTaskTitle]=useState('')

  const onChengeHandler= (e:ChangeEvent<HTMLInputElement>)=>{
    setTaskTitle(e.currentTarget.value)
  }
  
    return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type='text' value={newTaskTitle} onChange={onChengeHandler}
      onKeyDown={(e) => {
        if (e.key === "Enter") { // Используем e.key вместо e.charCode
            addTask(newTaskTitle);
            setTaskTitle("");
        }
    }} />
        <button 
    onClick={() => {
        addTask(newTaskTitle);
        setTaskTitle("");
    }} 
    
>
    +
</button>
      </div>
      {tasks.length === 0 ? (
        <span>No tasks</span>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button title= {'x'} onClick={()=>delTasks(task.id)}/>
              </li>
            );
          })}
        </ul>
      )}

      <div className="button">
      <Button title={'All'} onClick={() => {setFiltered('all')}}/>
        <Button title={'Active'}onClick={() => {setFiltered('active')}} />
        <Button title={'Completed'} onClick={() => {setFiltered('completed')}}/>
      </div>
    </div>
  );
};
