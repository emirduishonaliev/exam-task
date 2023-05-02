import React, { useContext, useReducer, useState } from "react";
import styled from "styled-components";
import { LoginContext } from "../store/AuthContext";

const formReducer = (state, action) => {
  switch (action.type) {
    case "email_change":
      return {
        ...state,
        email: action.payload,
      };
    case "email_validation":
      return {
        ...state,
        isEmailValid: state.email.includes("@"),
      };
    case "password_change":
      return {
        ...state,
        password: action.payload,
      };
    case "password_validation":
      return {
        ...state,
        isPasswordValid: state.password.trim().length > 6,
      };
  }
};

export const LoginForm = () => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    email: "",
    isEmailValid: true,
    password: "",
    isPasswordValid: true,
  });

  const { logIn } = useContext(LoginContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    dispatchForm({ type: "email_change", payload: e.target.value });
    setFormIsValid(
      e.target.value.includes("@") && formState.password.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchForm({ type: "email_validation" });
  };

  const passwordChangeHandler = (e) => {
    dispatchForm({ type: "password_change", payload: e.target.value });
    setFormIsValid(
      e.target.value.trim().length > 6 && formState.email.includes("@")
    );
  };

  const validatePasswordHandler = () => {
    dispatchForm({ type: "password" });
  };

  const submitHandler = () => {
    logIn();
  };

  return (
    <Container>
      <label htmlFor="email">Email</label>
      <StyledInput
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        type="email"
        id="email"
        // value={formState.email}
        // style={
        //   !formState.isEmailValid
        //     ? { backgroundColor: "#c70e0e71" }
        //     : { backgroundColor: "#fff" }
        // }
      />
      <label htmlFor="password">Password</label>
      <StyledInput
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        type="password"
        id="password"
        // value={formState.password}
        // style={
        //   !formState.isPasswordValid
        //     ? { backgroundColor: "#c70e0e71" }
        //     : { backgroundColor: "#fff" }
        // }
      />
      <div>
        <StyledBtn onClick={submitHandler} disabled={!formIsValid}>
          Login
        </StyledBtn>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6363b4;
  padding: 30px;
  border-radius: 10px;
  color: white;
  width: 400px;
  margin-left: 450px;
`;

const StyledInput = styled.input`
  width: 350px;
  height: 25px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const StyledBtn = styled.button`
  width: 90px;
  padding: 8px;
  border-radius: 10px;
  border-style: none;
  background-color: green;
  color: white;
  :disabled {
    background-color: gray;
  }
`;
