import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todo } = useContext(TodoContext);
  console.log(todo);
  return (
    <div>
      {todo.map((elem) => {
        return <TodoItem elem={elem} />;
      })}
    </div>
  );
};
