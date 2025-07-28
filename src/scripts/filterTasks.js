function filteredTasks(userTasks, priority, status){
    if(!priority && !status) return userTasks;

    return userTasks.filter(task => {
        const matchPriority = priority ? task.priority === priority : true;
        const matchStatus = status ? task.status === status : true;

        return matchPriority && matchStatus;
    });
}

export default filteredTasks;