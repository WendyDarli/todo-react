import './Wrapper.css';

function Wrapper(){
    return(
        <div id='wrapper'>
            <div id='top-wrapper'>
                <button className="lilac-btn"><b>All Tasks</b></button>
                <button className='border-btn'>New +</button> 
            </div>

            <div id='bottom-wrapper'>
                <button className='border-btn'>Filter</button>
                <button className='border-btn'>Kanban View</button> 
            </div>

        </div>

    )
}

export default Wrapper