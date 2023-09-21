import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TaskPage } from './TaskPage';
import { TaskListProvider } from '../../../app/providers/TaskListProvider';

const taskListContext = {
  taskList: {},
  addTask: jest.fn(),
  changeTaskStatus: jest.fn(),
  clearCompleted: jest.fn(),
  switchStatus: jest.fn(),
  displayStatus: 'all', 
};

const renderWithTaskListContext = (component: React.ReactNode) => {
  return render(
    <TaskListProvider value={taskListContext}>
      {component}
    </TaskListProvider>
  );
};

describe('test TaskPage',()=>{
  it('renders TaskPage component', () => {
    renderWithTaskListContext(<TaskPage />);
    const taskPageElement = screen.getByTestId('task-page');
    expect(taskPageElement).toBeInTheDocument();
    
  })

  it('renders empty task list',()=>{
    renderWithTaskListContext(<TaskPage />);
    const emptyTaskList = screen.getByTestId('empty-task-list');
    expect(emptyTaskList).toBeInTheDocument();
  })

  it('renders TaskForm component', () => {
    renderWithTaskListContext(<TaskPage />);
    const taskFormElement = screen.getByTestId('task-form');
    expect(taskFormElement).toBeInTheDocument();
  });

  it('adds a task when submitting TaskForm', async () => {
    renderWithTaskListContext(<TaskPage />);
    const formBtn = screen.getByTestId('task-form-btn')
    const formInput = screen.getByRole('textbox')
    
    fireEvent.change(formInput, { target: { value: 'New Task' } });
    
    fireEvent.click(formBtn)
   
    expect(taskListContext.addTask).toHaveBeenCalledWith(0, {
      id: 0,
      text: 'New Task',
      status: 'active',
    });

  });

  it('switchStatus is called when switch button is pushed',  () => {
    renderWithTaskListContext(<TaskPage />);
    const switchActive = screen.getByTestId('switch-active')
    
    fireEvent.click(switchActive)
    expect(taskListContext.switchStatus).toHaveBeenCalled()
  });

})





