import { Button } from "./button";

type Props = {
  title: string;
  tasks: Task[];
  date?: string;
};
type Task = {
  id: number;
  title: string;
  isDone: boolean;
};
export const TodolistItem = ({ title, tasks }: Props) => {
  
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
              </li>
            );
          })}
        </ul>
      )}

      <div className="button">
      <Button title={'All'} />
        <Button title={'Active'} />
        <Button title={'Completed'} />
      </div>
    </div>
  );
};
