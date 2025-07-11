import { useState } from "react";
import "./App.css";

import { Task, TodolistItem } from "./TodolistItem";
import { v1 } from "uuid";

export type FilterValues = "all" | "active" | "completed";
export type TodoListType = {
  id: string;
  title: string;
  filter: FilterValues;
};
type TodoListTypeState = {
  [key: string]: Task[];
};

export const App = () => {
  

  const delTasks = (taskId: string, todolistId: string) => {
       setTasks({
      ...tasksall,
      [todolistId]: tasksall[todolistId].filter((b) => b.id !== taskId),
    });
  };

  const addTask = (title: string, todolistId: string) => {
    
    setTasks({
      ...tasksall,
      [todolistId]: [
        ...tasksall[todolistId],
        { id: v1(), title, isDone: false },
      ],
    });
  };

  const changeTaskStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => {
    
    setTasks({
      ...tasksall,
      [todolistId]: tasksall[todolistId].map((task) =>
        task.id === taskId ? { ...task, isDone } : task
      ),
    });
  };

  const setFiltered = (filter: FilterValues, todolistId: string) => {
    
    setTodolist(
      todolists.map((tl) =>
        tl.id === todolistId ? { ...tl, filter: filter } : tl
      )
    );
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
      { id: v1(), title: "RTK query", isDone: false },
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
      { id: v1(), title: "RTK query", isDone: false },
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
      { id: v1(), title: "RTK query", isDone: false },
      { id: v1(), title: "HTML&CSS", isDone: true },
    ],
    [todilistId2]: [
      { id: v1(), title: "Hello world", isDone: true },
      { id: v1(), title: "I am Happy", isDone: false },
      { id: v1(), title: "Yo", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
      { id: v1(), title: "Typescript", isDone: false },

    ],
  });


   const TodolistComponent=
  todolists.map(tl=>{
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
              // title={tl.title}
              tasks={filteredTasks}
              delTasks={delTasks}
              setFiltered={setFiltered}
              addTask={addTask}
              changeTaskStatus={changeTaskStatus}
              // filter={tl.filter}
              delTodo={delTodo}
              todolist={tl}
            />
            {/* <Lists /> */}
          </>
        );
  })
  
  return(
    <div className="todo">
        {TodolistComponent}
    </div>
  )
  // return (
  //   <div className="app">
  //     {todolists.map((tl) => {
  //       let filteredTasks = tasksall[tl.id];
  //       if (tl.filter === "active") {
  //         filteredTasks = tasksall[tl.id].filter((task) => !task.isDone);
  //       }
  //       if (tl.filter === "completed") {
  //         filteredTasks = tasksall[tl.id].filter((task) => task.isDone);
  //       }
  //       return (
  //         <>
  //           <TodolistItem
  //             id={tl.id}
  //             key={tl.id}
  //             // title={tl.title}
  //             tasks={filteredTasks}
  //             delTasks={delTasks}
  //             setFiltered={setFiltered}
  //             addTask={addTask}
  //             changeTaskStatus={changeTaskStatus}
  //             // filter={tl.filter}
  //             delTodo={delTodo}
  //             todolist={tl}
  //           />
  //           {/* <Lists /> */}
  //         </>
  //       );
  //     })}
  //   </div>
  // );
};
