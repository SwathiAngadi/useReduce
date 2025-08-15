
import { createContext, useReducer } from "react";

import reducer from './reducer';

export const TaskContext = createContext(null);
export const TaskDispatch = createContext(null);

export function TaskProvider({children}){

    const initial = [
        { id: 0, name: "todo1", complete: false },
        { id: 1, name: "todo2", complete: false },
        { id: 2, name: "todo3", complete: true },
      ];
    
    const [todos, dispatch]= useReducer(reducer,initial);

    return (
        <TaskContext value={todos}>
            <TaskDispatch value={dispatch}>
                {children}
            </TaskDispatch>
        </TaskContext>
       
    )
}
