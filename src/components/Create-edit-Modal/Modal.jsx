import './Modal.css';

function Modal({ mode, task ,closeModal }){

    return(
        <div id='modal-wrapper'>
            <div id='modal-container'>
                <p>{mode.title}</p>
            
                    <input aria-label='type task' type='text'  placeholder='Task' required defaultValue={task?.todoName || ''}></input>
                    <textarea aria-label='description' placeholder='Description...' required defaultValue={task?.description || ''}></textarea>

                <div className='selects-container'>
                    
                    <select required defaultValue={task?.status || ''}>
                        <option value=''>Status</option>
                        <option value='To-Do'>To-Do</option>
                        <option value='In-Progress'>In Progress</option>
                        <option value='Done'>Done</option>
                    </select>
                
                    <select required defaultValue={task?.priority || ''}>
                        <option value=''>Priority</option>
                        <option value='High'>High</option>
                        <option value='Medium'>Medium</option>
                        <option value='Low'>Low</option>
                    </select>
                    
                        <input aria-label='date' type='date' required></input>                    
                </div>

                <button className='border form-bttn' type='button' onClick={closeModal}>{mode.button1}</button>
                <button className='border form-bttn lilac-bttn' type='button' onClick={closeModal} >{mode.button2}</button>

            </div>
        </div>
    );
}

export default Modal