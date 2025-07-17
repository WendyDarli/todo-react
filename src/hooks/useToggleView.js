import {useState} from 'react';

//this hook toggles view to display a todos list or a kanban view
export function useToggleView(){
    const [view, setView] = useState('todo');

    function toggleView() { 
        setView(prevState => (prevState === 'todo' ? 'kanban' : 'todo'));
    }

    return { view, toggleView };
}