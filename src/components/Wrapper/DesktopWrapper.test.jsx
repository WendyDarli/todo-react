//check if 'New +' opens the form modal
import { useState } from 'react';
import { test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DesktopWrapper from './DesktopWrapper';
import Modal from '../Create-edit-Modal/Modal';

test('clicking the button opens the form', async() =>{
    const mockEditOrCreate = vi.fn();
    const mockDelete = vi.fn();
    const mode = { title: 'New Task', button1: 'Delete', button2: 'Save' };

  function TestWrapper() {
    const [showModal, setShowModal] = useState(false);

    function openModal(){
      setShowModal(true);
    }

    function closeModal(){
      setShowModal(false);
    }

    return (
      <>
        <DesktopWrapper
          openModal={openModal}
        />
        {showModal && (
          <Modal
            mode={mode}
            closeModal={closeModal}
            editOrCreateTask={mockEditOrCreate}
            deleteTask={mockDelete}
          />
        )}
      </>
    );
  }

  render(<TestWrapper />);
  
  expect(screen.queryByText('New Task')).not.toBeInTheDocument();

  // Button click
  const button = screen.getByRole('button', { name: /New \+/i });
  await userEvent.click(button);

  // Modal should appear
  const modalTitle = await screen.findByText('New Task');
  expect(modalTitle).toBeInTheDocument();
  
});