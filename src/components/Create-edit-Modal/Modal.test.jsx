import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Modal from './Modal';

let user;
const mode = { title: 'Create Task', button1: 'Cancel', button2: 'Create' };
let mockTask;
let mockDelete;
let mockClose;
let mockEditOrCreate;

beforeEach(() => {
    mockTask = vi.fn();
    mockDelete = vi.fn();
    mockClose = vi.fn();
    mockEditOrCreate = vi.fn();
    user = userEvent.setup();

})


test('renders a form with valid inputs, receive a value, and update state on form submission', async () => {
        function TestWrapper(){
        const [taskArray, setTaskArray] = useState([]);

        const formData = {
            id: 1,
            todoName: 'My new task',
            description: 'My task description',
            status: 'Done',
            priority: 'High',
            dueDate: '2027-01-02'
        };

        const editOrCreateTask = (formData) => {
            mockEditOrCreate(formData);   
            setTaskArray([formData]);     
        };


        return(
            <>
                <Modal
                    mode={mode}
                    task={null}
                    closeModal={mockClose}
                    editOrCreateTask={editOrCreateTask}
                    deleteTask={mockDelete}
                />

                <ul>
                    {taskArray.map(t => <li key={t.id}>{t.todoName}</li>)}
                </ul>

            </>
        );

       
        
    }
    render(<TestWrapper/>)


    const taskTitle = screen.getByRole('textbox', {name: /type task/i });
    await userEvent.type(taskTitle, 'My new task');
    expect(taskTitle).toHaveValue('My new task');

    const taskDescription = screen.getByRole('textbox', {name: /description/i });
    await userEvent.type(taskDescription, 'My task description');
    expect(taskDescription).toHaveValue('My task description');

    const statusSelect = screen.getByRole('combobox', {name: /status/i});
    await userEvent.selectOptions(statusSelect, 'Done');
    expect(statusSelect).toHaveValue('Done');

    const prioritySelect = screen.getByRole('combobox', {name: /priority/i});
    await userEvent.selectOptions(prioritySelect, 'High');
    expect(prioritySelect).toHaveValue('High');

    const date = screen.getByLabelText(/due date/i);
    fireEvent.change(date, { target: { value: '2027-01-02' } });
    expect(date).toHaveValue('2027-01-02');




    //form submission
    
    const createButton = screen.getByRole('button', {name: /Create/i});
    await user.click(createButton);

    expect(screen.getByText('My new task')).toBeInTheDocument();

    expect(mockEditOrCreate).toBeCalledWith(expect.objectContaining({
        todoName: 'My new task',
        description: 'My task description',
        status: 'Done',
        priority: 'High',
        dueDate: '2027-01-02'
    }));
});


