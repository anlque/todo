import AddToPhotosSharpIcon from '@mui/icons-material/AddToPhotosSharp';

export const EmptyTaskList = ()=>{
    return (
    <div data-testid="empty-task-list" className='empty'>
        <AddToPhotosSharpIcon />
        <span>Plan your day</span>
    </div>)
}