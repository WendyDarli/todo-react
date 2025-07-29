import './Wrapper.css';
import loadDummyData from '../../utils/loadDummyData';

function DesktopWrapper({ openModal, toggleView, view, setIsFiltersOpen }){

    return(
        <div id='wrapper'>
            <div id='top-wrapper'>
                <div className="lilac-container"><p><b>All Tasks</b></p></div>
                <button className='border' onClick={openModal}>New +</button> 
            </div>

            <div id='bottom-wrapper'>
                <button className='border short-btn' onClick={() => setIsFiltersOpen(prev => !prev)}>Filter</button>
                <button className='border short-btn' onClick={toggleView}>{view ==='todo' ? 'Kanban View' : 'Todo View'}</button> 
                <button className='border' onClick={() => loadDummyData()}>Load Dummy Data</button>
            </div>
            
        </div>

    )
}

export default DesktopWrapper