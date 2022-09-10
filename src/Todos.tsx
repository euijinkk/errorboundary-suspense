import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  // fetch는 400, 500 에러에 대해 failed promise를 반환하지 않는다.
  // axios를 사용하면 간편하다.
  const { data: todos } = useQuery("todos", async () => {
    const { data } = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos2"
    );

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
