import { motion, AnimatePresence } from 'framer-motion';
import './FiltersDiv.css';

function FiltersDiv({ isFiltersOpen, setPriority, setStatus, priority, status }) {

  return (
    <AnimatePresence initial={false}>
      {isFiltersOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
        
        <div>
            <div className='filterRow'>
                <p>Priority: </p>
                <button className={`filterTag green ${priority === 'Low' ? 'selected' : ''}`} onClick={()=> setPriority('Low')}>Low</button>
                <button className={`filterTag yellow ${priority === 'Medium' ? 'selected' : ''}`} onClick={() => setPriority('Medium')}>Medium</button>
                <button className={`filterTag red ${priority === 'High' ? 'selected' : ''}`} onClick={() => setPriority('High')}>High</button>
            </div>
            <div className='filterRow'>
                <p>Status: </p>
                <button className={`filterTag green ${status === 'Done' ? 'selected' : ''}`} onClick={()=> setStatus('Done')}>Done</button>
                <button className={`filterTag yellow ${status === 'In-Progress' ? 'selected' : ''}`}  onClick={()=> setStatus('In-Progress')}>In Progress</button>
                <button className={`filterTag red ${status === 'To-Do' ? 'selected' : ''}`} onClick={()=> setStatus('To-Do')}> To-Do</button>
            </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FiltersDiv;