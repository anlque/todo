import { memo } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Task } from '../model/types/task';

interface TaskItemProps {
    task: Task,
    onClick: (id: number) => void
}

export const TaskItem = memo(({ task, onClick }: TaskItemProps)=>{
    return (
    <ListItem
        key={task.id}
        disablePadding
        
   >
        <ListItemButton role={undefined} 
            onClick={()=>onClick(task.id)}
            dense
        >
        <ListItemIcon>
            <Checkbox
                checked={task.status==='completed'}
                edge="start"
                tabIndex={-1}
                disableRipple

            />
        </ListItemIcon>
        <ListItemText 
            primary={task.text}
        />
        </ListItemButton>
   </ListItem>)
})