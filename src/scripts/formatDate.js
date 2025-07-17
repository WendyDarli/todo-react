import { format, isToday, isTomorrow, isYesterday, parseISO } from 'date-fns';   
   
//format date to display in the UI
function formatDate(dateString) {
    const date = parseISO(dateString); 

    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    if (isYesterday(date)) return 'Yesterday';

    return format(date, 'MMMM d');
}

export { formatDate }; 