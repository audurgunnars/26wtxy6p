import React, { useState } from 'react';
import { Box } from '@mui/joy';
import Modal from '../HeatingSystemModal/components/Modal';
import { PrimaryButton } from '../HeatingSystemModal/UI/Button';

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Box
      sx={{
        p: 2, display: 'flex', justifyContent: 'center',
      }}
    >
      <PrimaryButton onClick={openModal} buttonText="Open Modal" showIcon={false} />
      <Modal isOpen={isModalOpen} onClose={closeModal} open={isModalOpen} />
    </Box>
  );
}

export default ModalPage;
