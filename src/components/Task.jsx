import { useContext, useState } from "react";
import { TaskContext, TaskDispatch } from "./context";

export default function Task({onComplete,handleDelete,handleEdit, todo}){
    const [isEditing, setIsEditing] = useState(false);
    const todos = useContext(TaskContext);
    const dispatch = useContext(TaskDispatch);

    return (
            <p>
            <input type="checkbox" name="complete" checked={todo.complete} 
             onChange={()=> dispatch({type:'completed', id:todo.id})} />
           { isEditing ? 
                <>
                    <input type="text" value={todo.name} name="editText"
                     onChange={(e)=> dispatch({type:'edit', task:todo})}
                     />
                    <button onClick={()=>setIsEditing(false)}>Save</button>
                </> : <>
                {todo.name} 
                <button onClick={()=>setIsEditing(true)}> Edit</button>
                </>
            }
          <button onClick={()=> dispatch({type: 'delete', id:id})}>Delete</button>
            </p>
    )
}