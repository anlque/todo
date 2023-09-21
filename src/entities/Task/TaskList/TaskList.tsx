import { memo } from 'react';
import List from '@mui/material/List';
import { Task } from '../TaskItem/model/types/task';
import { TaskItem } from '../TaskItem/ui/TaskItem';

interface TaskListProps {
    className?: string;
    list: Task[];
    onClickItem: (taskId:number) => void
}

export const TaskList = memo(({ className, list, onClickItem }: TaskListProps) => {

    return (
        <div data-testid='task-list'>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {list.map((task) => {
                        return (
                        <TaskItem key={task.id} task={task} onClick={onClickItem} />
                        );
                    })} 
            </List> 
        </div>
    );
});