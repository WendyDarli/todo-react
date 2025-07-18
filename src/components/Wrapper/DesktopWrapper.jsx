import './Wrapper.css';
function DesktopWrapper({ openModal, toggleView, view }){

    return(
        <div id='wrapper'>
            <div id='top-wrapper'>
                <div className="lilac-container"><p><b>All Tasks</b></p></div>
                <button className='border short-btn' onClick={openModal}>New +</button> 
            </div>

            <div id='bottom-wrapper'>
                <button className='border'>Filter</button>
                <button className='border' onClick={toggleView}>{view ==='todo' ? 'Kanban View' : 'Todo View'}</button> 
            </div>

        </div>

    )
}

export default DesktopWrapper