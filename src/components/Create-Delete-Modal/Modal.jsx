import './Modal.css';

function Modal(){

    return(
        <div id='modal-container'>
            <p>Edit Task</p>
           
                <input aria-label='type task' type='text'  placeholder='Task' required></input>
                <textarea aria-label='description' placeholder='Description...' required></textarea>

            <div className='selects-container'>
                
                <select required>
                    <option value=''>Status</option>
                    <option value='to-do'>To-Do</option>
                    <option value='in progress'>In Progress</option>
                    <option value='done'>Done</option>
                </select>
               
                <select required>
                    <option value=''>Priority</option>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='Low'>Low</option>
                </select>
                
                    <input aria-label='date' type='date' required></input>                    
            </div>

            <button className='border form-bttn' type='button'>Delete</button>
            <button className='border form-bttn lilac-bttn' type='button'>Save</button>

        </div>
    );
}

export default Modal