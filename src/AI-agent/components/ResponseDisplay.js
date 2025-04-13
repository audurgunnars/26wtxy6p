import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  animation: ${fadeIn} 0.3s ease-out forwards;
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.foreground};
`;

export function ResponseDisplay({ response }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [containerRef]);

  return (
    <Container ref={containerRef}>
      <Paragraph>{response}</Paragraph>
    </Container>
  );
}
