// Filters tasks by priority or/and status and returns a filtered array
/**
 * @param {Array<Object>} userTasks - The list of tasks to filter.
 * @param {string} [priority] - Optional. The priority to filter by (e.g., 'high', 'medium', 'low').
 * @param {string} [status] - Optional. The status to filter by (e.g., 'Done', 'In Progress').
 * @returns {Array<Object>} Filtered array of tasks.
 */

function filteredTasks(userTasks, priority, status){
    if(!priority && !status) return userTasks;

    return userTasks.filter(task => {
        const matchPriority = priority ? task.priority === priority : true;
        const matchStatus = status ? task.status === status : true;

        return matchPriority && matchStatus;
    });
}

export default filteredTasks;