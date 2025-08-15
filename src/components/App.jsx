import AddTask from "./AddTask";
import TaskLists from "./TaskLists";
import { TaskProvider} from './context'

function App() {
    return (
    <TaskProvider>
      <h2> TODO List</h2>
      <AddTask />
      <TaskLists />
    </TaskProvider>
  );
}

export default App;
