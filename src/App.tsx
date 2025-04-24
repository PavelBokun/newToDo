import { useState } from "react";
import "./App.css";
import { Count } from "./count";
import { Button } from "./dd";
import { Filter } from "./filter";
import { Task, TodolistItem } from "./TodolistItem";
import { Car } from "./topcar";
import { v1 } from "uuid";
import { Lists } from "./fetch";

export type FilterValues = "all" | "active" | "completed";
type TodoListType = {
  id: string;
  title: string;
  filter: FilterValues;
};
type TodoListTypeState = {
  [key: string]: Task[];
};

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

  const delTasks = (taskId: string, todolistId: string) => {
    const updatedTasks = { ...tasksall };
    updatedTasks[todolistId] = updatedTasks[todolistId].filter(
      (b) => b.id !== taskId
    );
    setTasks(updatedTasks);
  };

  const addTask = (title: string, todolistId: string) => {
    const updatedTasks = { ...tasksall };
    const newTask = { id: v1(), title, isDone: false };
    updatedTasks[todolistId] = [newTask, ...updatedTasks[todolistId]];
    setTasks(updatedTasks);
  };

  //  ????
  const changeTaskStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => {
    const updatedTasks = { ...tasksall };
    updatedTasks[todolistId] = updatedTasks[todolistId].map((task) =>
      task.id === taskId ? { ...task, isDone } : task
    );
    setTasks({ ...updatedTasks });
  };

  const setFiltered = (filter: FilterValues, todolistId: string) => {
    let todolist = todolists.find((b) => b.id === todolistId);
    if (todolist) {
      todolist.filter = filter;
      setTodolist([...todolists]);
    }
  };
  const delTodo = (todolistId: string) => {
    let deltodolists = todolists.filter((b) => b.id !== todolistId);
    setTodolist(deltodolists);
    delete tasksall[todolistId];
    setTasks({ ...tasksall });
  };

  let todilistId1 = v1();
  let todilistId2 = v1();

  let [todolists, setTodolist] = useState<Array<TodoListType>>([
    { id: todilistId1, title: "What to learn", filter: "all" },
    { id: todilistId2, title: "What to learn2", filter: "all" },
  ]);
  let [tasksall, setTasks] = useState<TodoListTypeState>({
    [todilistId1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
      { id: v1(), title: "Typescript", isDone: false },
      { id: v1(), title: "RTK query", isDone: false },
    ],
    [todilistId2]: [
      { id: v1(), title: "Hello world", isDone: true },
      { id: v1(), title: "I am Happy", isDone: false },
      { id: v1(), title: "Yo", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
    ],
  });

  return (
    <div className="app">
      {todolists.map((tl) => {
        let filteredTasks = tasksall[tl.id];
        if (tl.filter === "active") {
          filteredTasks = tasksall[tl.id].filter((task) => !task.isDone);
        }
        if (tl.filter === "completed") {
          filteredTasks = tasksall[tl.id].filter((task) => task.isDone);
        }
        return (
          <>
            <TodolistItem
              id={tl.id}
              key={tl.id}
              title={tl.title}
              tasks={filteredTasks}
              delTasks={delTasks}
              setFiltered={setFiltered}
              addTask={addTask}
              changeTaskStatus={changeTaskStatus}
              filter={tl.filter}
              delTodo={delTodo}
            />
            {/* <Lists /> */}
            
          </>
        );
      })}
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
