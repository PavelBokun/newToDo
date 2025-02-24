import { useState } from "react";
import "./App.css";
import { Count } from "./count";
import { Button } from "./dd";
import { Filter } from "./filter";
import { Task, TodolistItem } from "./TodolistItem";
import { Car } from "./topcar";
import { v1 } from "uuid";




export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {

 
  const [tasks, setTask] = useState<Task[]> ([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Typescript", isDone: false },
    { id: v1(), title: "RTK query", isDone: false },
  ]);

  const tasks2 = [
    { id: 1, title: "Hello world", isDone: true },
    { id: 2, title: "I am Happy", isDone: false },
    { id: 3, title: "Yo", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ];
  
  const topCars = [
    {id:1, manufacturer:'BMW', model:'m5cs'},
    { id:2, manufacturer:'Mercedes', model:'e63s'},
    {id:3, manufacturer:'Audi', model:'rs6'}
  ]

  
  const delTasks=(taskId: number)=>{
    let delTasknumber =tasks.filter((b)=>b.id !== taskId)

    setTask(delTasknumber)
    
      }
      const [filter,setFilter]=useState<FilterValues>('all')

      let filteredTasks = tasks
      if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
      }
      if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
      }
      const setFiltered=(filter:FilterValues)=>{
              setFilter (filter)
        console.log(filter)
      }
    
  return (
    <div className="app">
      <TodolistItem title="What to learn" tasks={filteredTasks} delTasks={delTasks} setFiltered={setFiltered} />
      <TodolistItem title="Songs" tasks={filteredTasks} delTasks={delTasks} setFiltered={setFiltered} />
      <Button />
      <Car car={topCars}/>
      <Filter />
      {/* <Count /> */}
    </div>
  );
};
