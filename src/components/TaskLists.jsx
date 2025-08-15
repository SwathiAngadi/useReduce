import {useContext, useState} from 'react';
import Task from './Task';
import { TaskContext } from './context';

export default function TaskLists(){ 

 const todos =useContext(TaskContext);
    return (
       <>
        { todos.map((todo) => (
           
              <Task key={todo.id} todo={todo} 
              />
          
          ))}
      
      </> 
    )
}