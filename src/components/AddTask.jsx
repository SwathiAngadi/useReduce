import {useContext, useState} from 'react';
import { TaskDispatch } from './context';

export default function AddTask(){

    const [title, setTtitle] = useState('');
    const dispatch = useContext(TaskDispatch);
    let id = 3 ;

    return(
        <>
        <p> Add Task</p>
        <input type="text" onChange={(e)=>setTtitle(e.target.value)}/>
        <button onClick={()=> dispatch({ type:'add', name : title, id: id++})}>Add</button>
        </>

    )
}