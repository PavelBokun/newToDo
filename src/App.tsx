import { useState } from "react";
import "./App.css";
import { Count } from "./count";
import { Button } from "./dd";
import { Filter } from "./filter";
import { Task, TodolistItem } from "./TodolistItem";
import { Car } from "./topcar";
import { v1 } from "uuid";

export type FilterValues = "all" | "active" | "completed";
type TodoListType={
  id:string
  title:string
  filter:FilterValues
}
export const App = () => {
  const [tasks, setTask] = useState<Task[]>([
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
    { id: 1, manufacturer: "BMW", model: "m5cs" },
    { id: 2, manufacturer: "Mercedes", model: "e63s" },
    { id: 3, manufacturer: "Audi", model: "rs6" },
  ];

  const delTasks = (taskId: string) => {
    let delTasknumber = tasks.filter((b) => b.id !== taskId);
    setTask(delTasknumber);
  };

  const addTask = (title: string) => {
    let newtask = { id: v1(), title: title, isDone: false };
    let newTasks = [newtask, ...tasks];
    setTask(newTasks);
  };
  // можно и так
  // const changeTaskStatus = (taskId: string, isDone: boolean) => {
  //   const task=tasks.find((b)=>b.id===taskId)
  //   if (task){
  //     task.isDone=isDone
  //   }
  //   setTask([...tasks])
  // };
  const changeTaskStatus = (taskId: string, isDone: boolean) => {
    const newState = tasks.map(task => task.id == taskId ? { ...task, isDone } : task)
    setTask(newState)
  }

  const [filter, setFilter] = useState<FilterValues>("all");

  
  const setFiltered = (filter: FilterValues) => {
    setFilter(filter);
    console.log(filter);
  };

let todolists: Array<TodoListType>=[
  {id:v1(),title:'What to learn', filter:'active'},
  {id:v1(),title:'What to learn2', filter:'completed'},
  {id:v1(),title:'What to learn2', filter:'completed'}

]

  return (
    <div className="app">

      {
        todolists.map((tl)=>{
          let filteredTasks = tasks;
  if (tl.filter === "active") {
    filteredTasks = tasks.filter((task) => !task.isDone);
  }
  if (tl.filter === "completed") {
    filteredTasks = tasks.filter((task) => task.isDone);
  }
          return <TodolistItem
          key={tl.id}
          title={tl.title}
          tasks={filteredTasks}
          delTasks={delTasks}
          setFiltered={setFiltered}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
          filter={tl.filter}      />
        })
      }
      {/* <TodolistItem
        title="What to learn"
        tasks={filteredTasks}
        delTasks={delTasks}
        setFiltered={setFiltered}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
         filter={filter}      />
      <TodolistItem
        title="Songs"
        tasks={filteredTasks}
        delTasks={delTasks}
        setFiltered={setFiltered}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
        filter={filter}      />
      <Button />
      <Car car={topCars} />
      <Filter />
      <Count /> */}
    </div>
  );
};
