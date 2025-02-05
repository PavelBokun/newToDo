 export type Props = {
  car: Cars[];
};
type Cars = {
  manufacturer: string;
  model: string;
  id: number;
};
export const Car = ({ car }: Props) => {
  return (
    <>
      {car.length === 0 ? (
        <span>No tasks</span>
      ) : (
        <ul>
          {car.map((c) => {
            return (
              <li key={c.id}>
                <p>{c.manufacturer}</p>
                <span>{c.model}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
