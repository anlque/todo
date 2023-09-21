import { createContext, useContext, useState,ReactNode } from 'react';
import { Task } from '../../entities/Task/TaskItem/model/types/task';

export type TaskListStore = {
  taskList: {
    [key: number]: Task;
  };
  displayStatus: string;
  switchStatus: (newDisplayStatus: string)=>void
  addTask: (id: number, task: Task) => void;
  changeTaskStatus: (taskId: number) => void;
  clearCompleted: () => void;
};

const TaskListContext = createContext<TaskListStore | undefined>(undefined);

interface TaskListProviderProps {
    children: ReactNode;
    value: TaskListStore;
}

export const TaskListProvider = ({ children, value }:TaskListProviderProps) => {
    // const [taskList, setTaskList] = useState<TaskListStore>({
    //   taskList: {},
    //   displayStatus: 'all',
    //   switchStatus: (newDisplayStatus) => {
    //     setTaskList((prevState) => ({
    //       ...prevState,
    //       displayStatus: newDisplayStatus,
    //     }));
    //   },
    //   addTask: (id, task) => {
    //     setTaskList((prevState) => ({
    //       ...prevState,
    //       taskList: { ...prevState.taskList, [id]: task },
    //     }));
    //   },
    //   changeTaskStatus: (taskId) => {
    //     setTaskList((prevState) => {
    //       const newStatus = (status: string) => status === 'active' ? 'completed' : 'active';
    //       const updatedTask = {
    //         ...prevState.taskList[taskId],
    //         status: newStatus(prevState.taskList[taskId].status),
    //       };
    //       return {
    //         ...prevState,
    //         taskList: { ...prevState.taskList, [taskId]: updatedTask },
    //       };
    //     });
    //   },
    //   clearCompleted: () => {
    //     setTaskList((prevState) => {
    //       const filteredData = Object.fromEntries(
    //         Object.entries({ ...prevState.taskList }).filter(
    //           ([key, value]) => value.status !== 'completed'
    //         )
    //       );
    //       return { ...prevState, taskList: filteredData };
    //     });
    //   },
    // });
  
    return (
      <TaskListContext.Provider value={value}>
        {children}
      </TaskListContext.Provider>
    );
  };
  
  export const useTaskListStore = () => {
    const context = useContext(TaskListContext);
    if (context === undefined) {
      throw new Error('useTaskListStore must be used within a TaskListProvider');
    }
    return context;
  };