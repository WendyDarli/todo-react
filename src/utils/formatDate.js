import { format, isToday, isTomorrow, isYesterday, parseISO } from 'date-fns';   

/**
 * formats date to display in the UI.
 * 
 * @param {string} dateString - ISO date string from a task.
 * @returns - Formatted date (e.g. 'December 12', 'Today',  'Tomorrow').
 */

function formatDate(dateString) {
    const date = parseISO(dateString); 

    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    if (isYesterday(date)) return 'Yesterday';

    return format(date, 'MMMM d');
}

export { formatDate }; 