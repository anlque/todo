import './App.css';
import { TaskPage } from '../pages/TaskPage';
import { TaskListProvider } from './providers/TaskListProvider';
import { useState } from 'react';
import { TaskListStore } from './providers/TaskListProvider';


function App() {
  const [taskList, setTaskList] = useState<TaskListStore>({
    taskList: {},
    displayStatus: 'all',
    switchStatus: (newDisplayStatus) => {
      setTaskList((prevState) => ({
        ...prevState,
        displayStatus: newDisplayStatus,
      }));
    },
    addTask: (id, task) => {
      setTaskList((prevState) => ({
        ...prevState,
        taskList: { ...prevState.taskList, [id]: task },
      }));
    },
    changeTaskStatus: (taskId) => {
      setTaskList((prevState) => {
        const newStatus = (status: string) => status === 'active' ? 'completed' : 'active';
        const updatedTask = {
          ...prevState.taskList[taskId],
          status: newStatus(prevState.taskList[taskId].status),
        };
        return {
          ...prevState,
          taskList: { ...prevState.taskList, [taskId]: updatedTask },
        };
      });
    },
    clearCompleted: () => {
      setTaskList((prevState) => {
        const filteredData = Object.fromEntries(
          Object.entries({ ...prevState.taskList }).filter(
            ([key, value]) => value.status !== 'completed'
          )
        );
        return { ...prevState, taskList: filteredData };
      });
    },
  });
  return (
    <TaskListProvider value={taskList}>
    <div className="App">
       <TaskPage />
    </div>
    </TaskListProvider>
  );
}

export default App;
