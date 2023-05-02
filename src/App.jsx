import { useContext } from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { LoginContext } from "./store/AuthContext";

// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "todo":
//       return {
//         ...state,
//         todo: action.payload,
//       };
//   }
// };

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [todo, dispatchTodo] = useReducer(todoReducer, {
  //   title: "",
  // });

  // const logIn = () => {
  //   setIsLoggedIn(true);
  //   localStorage.setItem("AUTH", JSON.stringify(true));
  // };

  // const logOut = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("AUTH");
  // };

  // const addNewTodo = (data) => {
  //   dispatchTodo({ type: "todo" });
  // };

  const { isLoggedIn } = useContext(LoginContext);

  return (
    <>
      {isLoggedIn ? <TodoForm /> : <LoginForm />}
      <TodoList />
    </>
  );
}

export default App;
