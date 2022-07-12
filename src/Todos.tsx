import React from "react";
import { useQuery } from "react-query";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const { data: todos } = useQuery("todos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: Todo[] = await response.json();

    return data;
  });

  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default Todos;
