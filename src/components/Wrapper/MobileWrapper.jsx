import './Wrapper.css';
import './MobileWrapper.css';
import loadDummyData from '../../utils/loadDummyData';

function MobileWrapper({ openModal, setIsFiltersOpen }){
    return(
        <div id='wrapper'>
            <div id='top-wrapper'>
                <div className="lilac-container"><p><b>All Tasks</b></p></div>
                
            </div>

            <div id='mobile-bottom-wrapper'>
                <button className='border' onClick={() => setIsFiltersOpen(prev => !prev)}>Filter</button>
                
                <button className='border short-btn' onClick={openModal}>New +</button> 
            </div>
            <button className='border' onClick={() => loadDummyData()}>Load Dummy Data</button>
        </div>

    )
}

export default MobileWrapper