import { FilterValues } from "./App";
import { Button } from "./button";

type Props = {
  title: string;
  tasks: Task[];
  date?: string;
  delTasks: (id: string) => void;
  setFiltered: (filter: FilterValues) => void;
  addTask: () => void;
};
 export type Task = {
  id: string ;
  title: string;
  isDone: boolean;
};
export const TodolistItem = ({ title, tasks,delTasks,setFiltered,addTask }: Props) => {
  
  

    return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button onClick={()=>addTask()}>+</button>
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
