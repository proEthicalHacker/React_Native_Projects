import { useState } from "react";
import Todos from './componets/Todos'
import  AddTodo  from "./componets/AddTodo";
import "./App.css";

function App() {
  

  return (
    <>
      <h1>Learn Redux</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
