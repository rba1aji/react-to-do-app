import React from "react";
// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

let count = 0;

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function UpdateTodo() {
    count++;
    setTask("");
    setTodo((old) => {
      return [...old, { todo: task, id: count }];
    });
  }

  function enterToSubmit(event) {
    if (event.keyCode === 13 && task) {
      UpdateTodo();
    }
  }

  function deleteTodo(itemID) {
    setTodo((oldTodo) => oldTodo.filter((item) => item.id !== itemID));
  }

  function Output() {
    return (
      <ul>
        {todo.map((item) => {
          return (
            <>
              <li>
                {item.todo}
                {"  "}
                <span
                  role="img"
                  aria-label="delete"
                  onClick={() => deleteTodo(item.id)}
                >
                  🗑️
                </span>
              </li>
            </>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <h1 className="text-3xl text-center">TO DO APP</h1>
      <input
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={enterToSubmit}
      />
      <Button varient="danger" type="submit" onClick={UpdateTodo} disabled={!task}>
        set to do
      </Button>
      <Output />
    </div>
  );
}

export default App;
