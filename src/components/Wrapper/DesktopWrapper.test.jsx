//check if 'New +' opens the a form modal
import { useState } from 'react';
import { test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DesktopWrapper from './DesktopWrapper';
import Modal from '../Create-edit-Modal/Modal';

test('clicking the button opens the form', async() =>{
    const mockEdit = vi.fn();
    const mockDelete = vi.fn();
    const mode = { title: 'New Task', button1: 'Delete', button2: 'Save' };

  function TestWrapper() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <DesktopWrapper
          openModal={() => setShowModal(true)}
        />
        {showModal && (
          <Modal
            mode={mode}
            closeModal={() => setShowModal(false)}
            editOrCreateTask={mockEdit}
            deleteTask={mockDelete}
          />
        )}
      </>
    );
  }

  render(<TestWrapper />);
  
  expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();

  // Button click
  const button = screen.getByRole('button', { name: /New \+/i });
  await userEvent.click(button);

  // Modal should appear
  const modal = await screen.findByTestId('modal-container');
  expect(modal).toBeInTheDocument();
  


});