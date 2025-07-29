export default function loadDummyData(){
    
    const dummyData = [
        {id: 2, todoName: 'Study React', description: 'Finish testing lessons', dueDate: '2025-06-07', status: 'In-Progress', priority: 'High'},
        {id: 3, todoName: 'Drink Water', description: '', dueDate: '2025-06-07', status: 'To-Do', priority: 'Low'},
        {id: 4, todoName: 'Feed cat', description: '', dueDate: '2025-07-07', status: 'Done', priority: 'Low'},
        {id: 5, todoName: 'Click and drag tasks on Kanban view', description: 'Give it a try!', dueDate: '2025-07-07', status: 'To-Do', priority: 'Medium'},
        {id: 6, todoName: 'Click a task to edit!', description: 'Tutorial', dueDate: '2025-07-07', status: 'To-Do', priority: 'High'},

    ];

    localStorage.removeItem('userData');
    localStorage.setItem('userData', JSON.stringify(dummyData));
    location.reload();
}