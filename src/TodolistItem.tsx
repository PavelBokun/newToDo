import { ChangeEvent, useState } from "react";
import { FilterValues, TodoListType } from "./App";
import { Button1 } from "./button";
import { IconButton } from "@mui/material";
// import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  id: string;
  // title: string;
  todolist: TodoListType;
  tasks: Task[];
  date?: string;
  delTasks: (id: string, todolistId: string) => void;
  setFiltered: (filter: FilterValues, todilistId: string) => void;
  addTask: (title: string, todolistId: string) => void;
  changeTaskStatus: (
    taskId: string,
    newStatusValue: boolean,
    todolistId: string
  ) => void;
  // filter:FilterValues
  delTodo: (todolistId: string) => void;
  addTodo: (title: string) => void;
};
export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};
export const TodolistItem = ({
  id,
  // title,
  todolist,
  tasks,
  delTasks,
  setFiltered,
  addTask,
  changeTaskStatus,
  // filter,
  delTodo,
}: Props) => {
  const [newTaskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [error2, setError2] = useState<string | null>(null);

  const onChengeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
    setError(null);
    setError2(null);
  };

  const onPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Используем e.key вместо e.charCode
      addTask(newTaskTitle, id);
      setTaskTitle("");
    }
  };

  const addTasks = () => {
    const trimmedTitle = newTaskTitle.trim();
    if (trimmedTitle !== "") {
      addTask(trimmedTitle, id);
      setTaskTitle("");
    } else {
      setError("Title is required");
      setError2("нужно ввести текст");
    }
  };

  const allFiltered = () => {
    setFiltered("all", id);
  };

  const filteredActive = () => {
    setFiltered("active", id);
  };
  const filteredComplited = () => {
    setFiltered("completed", id);
  };
  let removeTodo = () => {
    delTodo(id);
  };

  return (
    <div>
      <div className="todo">
        <h3>{todolist.title}</h3>
        <IconButton aria-label="delete" onClick={removeTodo}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div>
        <input
          className={error ? "error" : ""}
          type="text"
          value={newTaskTitle}
          onChange={onChengeHandler}
          onKeyDown={onPressHandler}
        />
        <button onClick={addTasks}>+</button>
        {error && <div className={"error-message"}>{error}</div>}
        {error2 && <div className={"error-message"}>{error2}</div>}
      </div>
      {tasks.length === 0 ? (
        <span>No tasks</span>
      ) : (
        <ul>
          {tasks.map((task) => {
            const delTasksHandler = () => delTasks(task.id, id);
            const changeTaskStatusHandler = (
              e: ChangeEvent<HTMLInputElement>
            ) => {
              const newStatusValue = e.currentTarget.checked;
              changeTaskStatus(task.id, newStatusValue, id);
              console.log(newStatusValue);
            };

            return (
              <li className={task.isDone ? "is-done" : "red"} key={task.id}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={changeTaskStatusHandler}
                />
                <span>{task.title}</span>
                <IconButton aria-label="delete" onClick={delTasksHandler}>
                  <DeleteIcon />
                </IconButton>
                {/* <Button1 title={"x"} onClick={delTasksHandler}></Button1> */}
                {/* <Button title={"add"} onClick={addTodo} /> */}
              </li>
            );
          })}
        </ul>
      )}

      <div className="button">
        <Button1
          className={todolist.filter === "all" ? "active-filter" : ""}
          title={"All"}
          onClick={allFiltered}
        />
        <Button1
          className={todolist.filter === "active" ? "active-filter" : ""}
          title={"Active"}
          onClick={filteredActive}
        />
        <Button1
          className={todolist.filter === "completed" ? "active-filter" : ""}
          title={"Completed"}
          onClick={filteredComplited}
        />
      </div>
    </div>
  );
};
