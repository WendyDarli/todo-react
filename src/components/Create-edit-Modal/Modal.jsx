import './Modal.css';
import { useState } from 'react';

/**
 * Modal Form that creates a new task or edits it based on mode
 * @param {Object} props - Component props.
 * @param {{ title: string, button1: string, button2: string }} props.mode - Controls modal labels and behavior (create or edit).
 * @param {Object} [props.task] - Optional. Task object to edit. If not provided, form defaults to empty for creating a new task.
 * @param {Function} props.closeModal - Function to close the modal (usually sets modal state to false).
 * @param {Function} props.editOrCreateTask - Function that either updates an existing task or adds a new one.
 * @param {Function} props.deleteTask - Function to delete a task (used when editing).
 * @returns {JSX.Element} The rendered modal component.
 */

function Modal({ mode, task, closeModal, editOrCreateTask, deleteTask }) {
    const [formData, setformData] = useState({
        id: task?.id || null,
        todoName: task?.todoName || '',
        description: task?.description || '',
        status: task?.status || '',
        priority: task?.priority || '',
        dueDate: task?.dueDate || ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setformData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        editOrCreateTask(formData);
        closeModal();
    }

    function handleDelete() {
        deleteTask(formData);
        closeModal();
    }

    return(
        <div id='modal-wrapper' onClick={(e) => {
            if(!e.target.closest('#modal-container')){
                closeModal();
            }
        }}>
            <div id='modal-container'>
                <p>{mode.title}</p>
                <form onSubmit={handleSubmit} className='form-container'>
                    <input aria-label='type task' name='todoName' type='text' placeholder='Task' required onChange={handleInputChange} value={formData.todoName}/>
                    <textarea aria-label='description' name='description' placeholder='Description...' onChange={handleInputChange} value={formData.description}></textarea>

                    <div className='selects-container'>
                        
                        <select name='status' onChange={handleInputChange} required value={formData.status}>
                            <option value=''>Status</option>
                            <option value='To-Do'>To-Do</option>
                            <option value='In-Progress'>In Progress</option>
                            <option value='Done'>Done</option>
                        </select>
                    
                        <select name='priority' onChange={handleInputChange} required value={formData.priority}>
                            <option value=''>Priority</option>
                            <option value='High'>High</option>
                            <option value='Medium'>Medium</option>
                            <option value='Low'>Low</option>
                        </select>
                        
                            <input aria-label='date' name='dueDate' type='date'min='2023-01-01' max='2030-01-01' onChange={handleInputChange} required value={formData.dueDate}/>                  
                    </div>
                    
                    <button className='border form-bttn' type='button' onClick={handleDelete}>{mode.button1}</button>
                    <button className='border form-bttn lilac-bttn' type='submit'>{mode.button2}</button>
                </form>
            </div>
        </div>
    );
}

export default Modal