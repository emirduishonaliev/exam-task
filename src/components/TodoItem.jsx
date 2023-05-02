import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import styled from "styled-components";

export const TodoItem = ({ elem }) => {
  const { deleteFunc } = useContext(TodoContext);
  return (
    <Contain>
      <div key={elem.id}>{elem.title}</div>
      <button onClick={() => deleteFunc(elem.id)}>delete</button>
    </Contain>
  );
};

const Contain = styled.div`
  width: 600px;
  padding: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #9b7f5c;
  color: white;
  margin-left: 400px;
`;
