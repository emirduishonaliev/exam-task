import { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const addNewTodo = () => {
    const data = {
      title: todoValue,

      id: Math.random(),
    };
    console.log(data);
    setTodo((prevState) => [...prevState, data]);
    setTodoValue("");
  };

  const deleteFunc = (id) => {
    const delet = todo.filter((elem) => elem.id !== id);
    setTodo(delet);
  };

  const changeTodoHandler = (e) => {
    setTodoValue(e.target.value);
  };

  const data = {
    todo,
    todoValue,
    changeTodoHandler,
    addNewTodo,
    deleteFunc,
  };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};
