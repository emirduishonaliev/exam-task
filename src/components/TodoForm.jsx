import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../store/TodoContext";
// import { AuthContext } from "../store/AuthContext";

export const TodoForm = () => {
  const { changeTodoHandler, addNewTodo, todoValue } = useContext(TodoContext);

  // const logOutHandler = () => {
  //   logOut();
  // };

  return (
    <>
      {/* <header>
        <button onClick={logOutHandler}>LogOut</button>
      </header> */}
      <StyledDiv>
        <input type="text" onChange={changeTodoHandler} value={todoValue} />
        <button onClick={addNewTodo}>Add</button>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  margin-top: 90px;
  margin-left: 700px;
`;
