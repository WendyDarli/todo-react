import { render, screen } from '@testing-library/react';
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
    mockEditOrCreate = vi.fn()

    user = userEvent.setup();
    render(<Modal 
        mode={mode}
        task={mockTask}
        closeModal={mockClose}
        editOrCreateTask={mockEditOrCreate}
        deleteTask={mockDelete}
    />);
})

//pros of modal:  mode, task, closeModal, editOrCreateTask, deleteTask 

test('should show a form with valid inputs, receive a value', async () => {
    
    const taskTitle = screen.getByRole('textbox', {name: /type task/i });
    await userEvent.type(taskTitle, 'My new task');
    expect(taskTitle).toHaveValue('My new task');

    const taskDescription = screen.getByRole('textbox', {name: /description/i });
    await userEvent.type(taskDescription, 'My task description');
    expect(taskDescription).toHaveValue('My task description');

});


test('clicking Create saves the task to the state array', async () => {

   expect(screen.getByTestId('modal-container')).toBeInTheDocument();


});