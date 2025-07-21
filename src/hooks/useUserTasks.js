import { useState, useEffect } from 'react';

//This hook manipulates the user tasks array, it uses useEffect() to synchronize with localStorage and manipulates the array by creating/editing and deleting tasks
export function useUserTasks() {
    const [userTasks, setUserTasks] = useState(()=> {
        const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : [
            {id: 1, todoName: 'Click in a task to edit!', description: 'Tutorial', dueDate: '2025-06-07', status: 'In-Progress', priority: 'High'},
        ];
    });


    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userTasks));
    }, [userTasks])

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

    return { userTasks, setUserTasks, editOrCreateTask, deleteTask };
};


 