import { useState } from "react";
import "./App.css";
import { Count } from "./count";
import { Button } from "./dd";
import { Filter } from "./filter";
import { Task, TodolistItem } from "./TodolistItem";
import { Car } from "./topcar";

export const App = () => {
  const [tasks, setTask] = useState<Task[]> ([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Typescript", isDone: false },
    { id: 6, title: "RTK query", isDone: false },
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

  return (
    <div className="app">
      <TodolistItem title="What to learn" tasks={tasks} delTasks={delTasks} />
      <TodolistItem title="Songs" tasks={tasks2} delTasks={delTasks} />
      <Button />
      <Car car={topCars}/>
      <Filter />
      {/* <Count /> */}
    </div>
  );
};
