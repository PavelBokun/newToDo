import { ChangeEvent, useState } from "react";
import { FilterValues } from "./App";
import { Button } from "./button";

type Props = {
  id:string
  title: string;
  tasks: Task[];
  date?: string;
  delTasks: (id: string,todolistId:string) => void;
  setFiltered: (filter: FilterValues, todilistId:string) => void;
  addTask: (title: string,todolistId:string) => void;
  changeTaskStatus: (taskId: string, newStatusValue: boolean, todolistId:string) => void;
  filter:FilterValues
};
export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};
export const TodolistItem = ({
  id,
  title,
  tasks,
  delTasks,
  setFiltered,
  addTask,
  changeTaskStatus,
  filter
}: Props) => {
  const [newTaskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null)
  const [error2, setError2] = useState<string | null>(null)


  
  const onChengeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
    setError(null)
    setError2(null)

  };

  const onPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Используем e.key вместо e.charCode
      addTask(newTaskTitle,id);
      setTaskTitle("");
    }
  };

  const addTasks = () => {
    const trimmedTitle = newTaskTitle.trim()
    if (trimmedTitle !== "") {
      addTask(trimmedTitle,id);
      setTaskTitle("");
    }
    else {
      setError('Title is required')
      setError2('Введите что либо')
    }
  };

  const allFiltered = () => {
    setFiltered("all",id);
  };

  const filteredActive = () => {
    setFiltered("active",id);
  };
  const filteredComplited = () => {
    setFiltered("completed",id);
  };
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input className={error ? 'error' : ''}
          type="text"
          value={newTaskTitle}
          onChange={onChengeHandler}
          onKeyDown={onPressHandler}
        />
        <button onClick={addTasks}>+</button>
        {error && <div className={'error-message'}>{error}</div>}
        {error2 && <div className={'error-message'}>{error2}</div>}
      </div>
      {tasks.length === 0 ? (
        <span>No tasks</span>
      ) : (
        <ul>
          {tasks.map((task) => {
            const delTasksHandler = () => delTasks(task.id,id);
            const changeTaskStatusHandler = (
              e: ChangeEvent<HTMLInputElement>
            ) => {
              const newStatusValue = e.currentTarget.checked;
              changeTaskStatus(task.id, newStatusValue,id);
              console.log(newStatusValue);
            };
            return (
              <li  className={task.isDone ? 'is-done' : 'red'} key={task.id}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={changeTaskStatusHandler}
                />
                <span>{task.title}</span>
                <Button title={"x"} onClick={delTasksHandler} />
              </li>
            );
          })}
        </ul>
      )}

      <div className="button">
        <Button className={filter === 'all' ? 'active-filter' : ''} title={"All"} onClick={allFiltered} />
        <Button className={filter === 'active' ? 'active-filter' : ''} title={"Active"} onClick={filteredActive} />
        <Button className={filter === 'completed' ? 'active-filter' : ''}title={"Completed"} onClick={filteredComplited} />
      </div>
    </div>
  );
};
