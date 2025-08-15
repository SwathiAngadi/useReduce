export default function reducer(state, action){
    
    switch(action.type){
        case 'completed':       
            return  state.map((todo)=>{
                if(todo.id=== action.id){
                       return ({...todo,
                          complete: !todo.complete})
                }else{
                  return todo;
                }
               });
               
        case 'add' : return [...state, 
           { id: action.id,
            name: action.name,
            complete: false
            }];
        case 'delete': return state.filter(todo=>todo.id!==action.id)

        case 'edit': return state.map(todo=>{
            if(todo.id===action.task.id){
                return action.task
            }else return todo;
        })
        
        default : return state;
    }
}