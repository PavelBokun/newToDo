import Button from "@mui/material/Button";
import { useState } from "react";

type Money = {
  banknots: string;
  value: number;
  number: string;
};

type Filter = 'rub'|'dol'|'all'

export const Filter = () => {
  const [money, setMoney] = useState<Money[]>([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

const [filter, setFilter] = useState<Filter>("all");

let curentmoney =money
if(filter === "dol")
{curentmoney=money.filter((b) => b.banknots === "Dollars")}
if(filter === "rub")
    {curentmoney=money.filter((b) => b.banknots === "RUBLS")}




  

  const finc1 = (name:Filter) => {
    setFilter (name)
  };

  return (
    <>
      {curentmoney.length === 0 ? (
        <span>No money</span>
      ) : (
        <ul>
          {curentmoney.map(
            (
              c,
              index // Убираем any и добавляем index для ключа
            ) => (
              <li key={index}>
                <span>{c.banknots}</span> {/* Исправлено на banknots */}
                <span>{c.value}</span> {/* Добавлено отображение value */}
                <span>{c.number}</span> {/* Исправлено на number */}
              </li>
            )
          )}
        </ul>
      )}
      <div>
        <Button onClick={() => finc1("dol")}>dol</Button>
        <button onClick={() => finc1("rub")}>rub</button>
        <button onClick={() => finc1("all")}>all</button>
      </div>
    </>
  );
};
