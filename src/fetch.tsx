import React, { useEffect, useState } from "react";

export const Lists = () => {
  const [data, setData] = useState<any[]>([]); // Хранилище для данных
  const [loading, setLoading] = useState(true); // Индикатор загрузки
  const [error, setError] = useState<string | null>(null); // Обработка ошибок

  useEffect(() => {
    // Запрос к API

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(fetchedData); // Сохраняем данные в состоянии
        setLoading(false); // Снимаем индикатор загрузки
      })
      .catch((err) => {
        setError(err.message); // Обрабатываем ошибку
        setLoading(false);
      });
  }, []); // Пустой массив зависимостей означает вызов useEffect только при монтировании компонента

  // Если данные загружаются
  if (loading) {
    return <p>Загрузка данных...</p>;
  }

  // Если произошла ошибка
  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <h1>Список данных</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>UserID: {item.userId}</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
