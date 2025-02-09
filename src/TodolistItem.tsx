import { Button } from "./button";

type Props = {
  title: string;
  tasks: Task[];
  date?: string;
  delTasks: (id: number) => void;
};
 export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};
export const TodolistItem = ({ title, tasks,delTasks }: Props) => {
  
  

    return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
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
      <Button title={'All'} onClick={() => {}}/>
        <Button title={'Active'}onClick={() => {}} />
        <Button title={'Completed'} onClick={() => {}}/>
      </div>
    </div>
  );
};
