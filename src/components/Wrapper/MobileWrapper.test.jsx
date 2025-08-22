//dependensies to import
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { useState } from 'react';
import MobileWrapper from './MobileWrapper';
import Modal from '../Create-edit-Modal/Modal';

test('clicking the button opens the form', async() => {
    const mockEditOrCreate = vi.fn();
    const mockDelete = vi.fn();
    const mode = { title: 'Create Task', button1: 'Cancel', button2: 'Create' };

    function TestWrapper() {
        const [showModal, setShowModal] = useState(false);

        function openModal(){
            setShowModal(true);
        }

        function closeModal(){
            setShowModal(false);
        }

        return(
            <>
                <MobileWrapper openModal={openModal}/>
                {showModal && (
                    <Modal
                        mode={mode}
                        closeModal={closeModal}
                        editOrCreateTask={mockEditOrCreate}
                        deleteTask={mockDelete}
                    />
                )}
            </>
        )
    }

    render(<TestWrapper/>);

    expect(screen.queryByText('Create Task')).not.toBeInTheDocument();

    //button click
    const button = screen.getByRole('button', { name: /New \+/i });
    await userEvent.click(button);

    // Modal shoud appear
    const modalTitle = await screen.findByText('Create Task');
    expect(modalTitle).toBeInTheDocument();

});
