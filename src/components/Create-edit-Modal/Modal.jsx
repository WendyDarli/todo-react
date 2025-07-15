import './Modal.css';
import { useState } from 'react';

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
        <div id='modal-wrapper'>
            <div id='modal-container'>
                <p>{mode.title}</p>
                <form onSubmit={handleSubmit} className='form-container'>
                    <input aria-label='type task' name='todoName' type='text' placeholder='Task' required onChange={handleInputChange} value={formData.todoName}/>
                    <textarea aria-label='description' name='description' placeholder='Description...' required onChange={handleInputChange} value={formData.description}></textarea>

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
                        
                            <input aria-label='date' name='dueDate' type='date' onChange={handleInputChange} required value={formData.dueDate}/>                  
                    </div>
                    {/* now how to set cancel or delete? maybe finding the id if exists -> delete if no, cancel */}
                    <button className='border form-bttn' type='button' onClick={handleDelete}>{mode.button1}</button>
                    <button className='border form-bttn lilac-bttn' type='submit'>{mode.button2}</button>
                </form>
            </div>
        </div>
    );
}

export default Modal