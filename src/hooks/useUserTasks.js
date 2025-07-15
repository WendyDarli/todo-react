import { useState } from 'react';

//TODO: refactor for localStorage
let userTasksDemo = [
    {id: 1, todoName: 'Study React', description: 'Complete the props lesson', dueDate: '2025-06-07', status: 'In-Progress', priority: 'High'},
    {id: 2, todoName: 'Drink Water', description: '', dueDate: '2025-07-05', status: 'To-Do', priority: 'Low'},
];


export function useUserTasks() {
    const [userTasks, setUserTasks] = useState(userTasksDemo);
    
    function generateId(){
        return crypto.randomUUID();
    };

    function editOrCreateTask(formData){ 
        const taskExists = userTasks.some(task => task.id === formData.id);

        if(taskExists){
            setUserTasks(prevState => [...prevState.filter(task => task.id !== formData.id), formData]);
        } else {
            const newTask = {...formData, id: generateId()};
            setUserTasks(prevState => [...prevState, newTask])
        }
    };

    function deleteTask(formData){
        const taskExists = userTasks.some(task => task.id === formData.id);

        if(taskExists){
            setUserTasks(prevState => prevState.filter(task => task.id !== formData.id));
        }
    }

    return { userTasks, editOrCreateTask, deleteTask };
};


 