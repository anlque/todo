import {useCallback} from "react";
import { TaskList } from "../../../entities/Task/TaskList";
import { Switcher } from "../../../widgets/Switcher/ui/Switcher";
import { TaskForm } from "../../../widgets/TaskForm/TaskForm";
import { defineId } from "../../../hooks/defineId/defineId";
import { CountDisplay } from "../../../widgets/CountDisplay/CountDisplay";
import { ClearBtn } from "../../../widgets/ClearBtn/ClearBtn";
import Divider from '@mui/material/Divider';
import { EmptyTaskList } from "../../../widgets/EmptyTaskList/EmptyTaskList";
import { useTaskListStore } from "../../../app/providers/TaskListProvider";


export const TaskPage = () => {
    const { taskList, addTask, changeTaskStatus, clearCompleted, displayStatus } = useTaskListStore()

    const onChangeStatus = useCallback((taskId:number)=>{
        changeTaskStatus(taskId)      
    },[changeTaskStatus])

    const onSubmit = useCallback((taskText:string)=>{
        const id = defineId(Object.keys(taskList).pop())
        addTask(id, {id, text: taskText, status: 'active'})
    },[addTask, taskList])

    const onClear = useCallback(()=>{
        clearCompleted()
    },[clearCompleted])


    const allTasks = Object.values(taskList)
    const completedTasks = Object.values(taskList).filter(task=>task.status === 'completed')
    const activeTasks = Object.values(taskList).filter(task=>task.status === 'active')

    let resultTaskList = allTasks

    if(displayStatus==='active') resultTaskList = activeTasks
    if(displayStatus==='completed') resultTaskList = completedTasks

    return (
    <div data-testid="task-page" className="container">
        <div className="header">
            <TaskForm onSubmit={onSubmit} />
        </div>
        <Divider />
        <div className="content">
            {allTasks.length>0 
            ? <TaskList list={resultTaskList} onClickItem={onChangeStatus} />
            : <EmptyTaskList />
        }
            
        </div>
        <Divider />
        <div className="footer">
            <CountDisplay count={activeTasks.length} />
            <Switcher />
            <ClearBtn disabled={completedTasks.length===0} onClear={onClear} />
        </div>
    </div>)
}

