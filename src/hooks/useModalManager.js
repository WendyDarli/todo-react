import { useState } from "react";
import { modalConfigs } from '../components/Create-edit-Modal/modalConfigs.js';
// This hook manages the modal state, including whether it is open, the mode of the modal, and the task ID if applicable
export function useModalManager(){
    const [ModalState, setModalState] = useState({
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

    return { ...ModalState, openModal, closeModal };
}
