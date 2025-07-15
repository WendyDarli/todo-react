import { useState } from "react";

// Modal configs are only used in this hook
const modalConfigs = {
    edit: {
        title: 'Edit Task',
        button1: 'Delete',
        button2: 'Save'
    },
    create: {
        title: 'Create Task',
        button1: 'Cancel',
        button2: 'Create'
    }
};



// This hook manages the modal state, including whether it is open, the mode of the modal, and the task ID if applicable
export function useModalManager(){
    const [modalState, setModalState] = useState({
        isOpen: false,
        modalMode: 'create',
        taskId: null,
    })
    

    function openModal (mode, taskId = null) {
        setModalState({
            isOpen: true,
            modalMode: modalConfigs[mode],
            taskId: taskId,
        });
    }

    function closeModal() {
        setModalState({
            isOpen: false,
            modalMode: null,
            taskId: null,
        });
    }

    return { ...modalState, openModal, closeModal };
}
