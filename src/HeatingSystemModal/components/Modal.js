import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalDialog,
  Box,
  AccordionGroup,
} from '@mui/joy';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import AccordionItem from './AccordionItem';

import HeatingCircuitInput from './HeatingCircuitInput';

const keyframes = {
  '@keyframes slideUpFade': {
    from: {
      transform: 'translate(-50%, 100%)',
      opacity: 0,
    },
    to: {
      transform: 'translate(-50%, -50%)',
      opacity: 1,
    },
  },
  '@keyframes slideDownFade': {
    from: {
      transform: 'translate(-50%, -50%)',
      opacity: 1,
    },
    to: {
      transform: 'translate(-50%, 100%)',
      opacity: 0,
    },
  },
};

export default function HeatingSurfaceModal({ open, onClose }) {
  const [shouldRender, setShouldRender] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!shouldRender) return null;

  const accordionMockData = [
    'Flachheizkörper',
    'Stahl- / Gussradiator',
    'Rohr- / Säulenradiator',
    'Badheizkörper',
    'Fußbodenheizung',
    'Profi Eingabe',
  ];

  return (
    <Modal open onClose={!isClosing ? onClose : undefined}>
      <ModalDialog sx={{
        overflow: 'scroll',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
        minWidth: 600,
        p: 0,
        animation: `${isClosing ? 'slideDownFade' : 'slideUpFade'} 300ms ease forwards`,
        ...keyframes,
      }}
      >
        <ModalHeader onClose={onClose} />
        <Box sx={{ p: 2 }}>
          <HeatingCircuitInput />
          <AccordionGroup size="lg" transition="0.2s ease">
            {accordionMockData.map((label, index) => (
              <AccordionItem key={label} label={label} isFirst={index === 0} />
            ))}
          </AccordionGroup>
        </Box>
        <ModalFooter onClose={onClose} />
      </ModalDialog>
    </Modal>
  );
}
