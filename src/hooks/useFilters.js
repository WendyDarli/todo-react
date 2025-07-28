import { useState } from 'react';

export function useFilters() {
    const [ isFiltersOpen, setIsFiltersOpen ] = useState(false);

    const [ priority, setPriority ] = useState(null);
    const [ status, setStatus ] = useState(null);

    //handlers switch between null or priority/status
    function handlePriorityFilter(value){
        setPriority(prev => (prev === value ? null : value));
    };

    function handleStatusFilter(value){
        setStatus(prev => (prev === value ? null : value));
    };

    return { isFiltersOpen, setIsFiltersOpen, handlePriorityFilter, priority, handleStatusFilter, status };
}