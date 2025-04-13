import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const pulse = keyframes`
  0% { transform: scale(0.8); opacity: 0.4; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.8); opacity: 0.4; }
`;

const Dot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  animation: ${pulse} 1.2s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const shimmer = keyframes`
  0% { transform: translateX(-40px); opacity: 0.5; }
  50% { opacity: 1; }
  100% { transform: translateX(40px); opacity: 0.5; }
`;

const ShimmerBar = styled.div`
  width: 8rem;
  height: 0.25rem;
  border-radius: 9999px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.primary},
    transparent
  );
  animation: ${shimmer} 1.5s ease-in-out infinite alternate;
`;

export function LoadingAnimation() {
  return (
    <Container>
      <DotsContainer>
        {[0, 1, 2].map((dot) => (
          <Dot key={dot} delay={dot * 0.2} />
        ))}
      </DotsContainer>
      <ShimmerBar />
    </Container>
  );
}
