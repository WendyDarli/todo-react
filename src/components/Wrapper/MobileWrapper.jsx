import './Wrapper.css';
import './MobileWrapper.css';

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

        </div>

    )
}

export default MobileWrapper