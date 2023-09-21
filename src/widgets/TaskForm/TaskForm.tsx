import { useCallback,useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface TaskFormProps {
    onSubmit: (taskText: string)=>void
}

export function TaskForm ({onSubmit}:TaskFormProps){

    const [taskText,setTaskText] = useState<string>('')

    const onChangeTaskText = useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
        setTaskText(event.target.value)
    }, [setTaskText])

    const handleSubmit = useCallback(()=>{
        onSubmit(taskText)
        setTaskText('')
    },[onSubmit,taskText])

 return <div data-testid='task-form' className="form">
            <TextField data-testid='task-form-input' id='task-form-input' value={taskText} variant="outlined" label="Enter task" onChange={onChangeTaskText} />
            {/* <button data-testid='task-form-btn' onClick={handleSubmit}></button> */}
            <Button disabled={taskText.length===0} data-testid='task-form-btn' variant="outlined" onClick={handleSubmit}>Add task</Button>
        </div>
}