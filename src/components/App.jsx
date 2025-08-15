import { useReducer, useState } from "react";

import reducer from './reducer';
import AddTask from "./AddTask";
import TaskLists from "./TaskLists";
import {TaskContext, TaskDispatch} from './context'

function App() {

  const initial = [
    { id: 0, name: "todo1", complete: false },
    { id: 1, name: "todo2", complete: false },
    { id: 2, name: "todo3", complete: true },
  ];

  const [todos, dispatch]= useReducer(reducer,initial);

    return (
    <>
    <TaskContext value={todos}>
      <TaskDispatch value={dispatch}>
        <h2>Todo List</h2>
        <AddTask />
        <TaskLists />
      </TaskDispatch>
    </TaskContext>
     
    </>
  );
}

export default App;
