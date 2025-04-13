import styled, { css, keyframes } from 'styled-components';

// App Layout Components
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
  max-width: 48rem;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.foreground};
`;

export const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.foreground};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring}33;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow: auto;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  transition: all 0.2s ease;
`;

export const EmptyStateMessage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mutedForeground};
  font-size: 1rem;
`;

// Form Components
export const InputForm = styled.form`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 3.5rem 1rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring}33;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.mutedForeground};
  }
`;

const buttonAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s ease;
  
  ${({ isProcessing, theme }) => (isProcessing
    ? css`
          background-color: ${theme.destructive};
          &:hover {
            background-color: ${theme.destructive}dd;
          }
        `
    : css`
          background-color: ${theme.primary};
          &:hover {
            background-color: ${theme.primary}dd;
          }
        `)}
  
  color: ${({ theme }) => theme.primaryForeground};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring}33;
  }
`;

export const ButtonIcon = styled.span`
  animation: ${buttonAnimation} 0.15s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Response Components
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ResponseContainer = styled.div`
  animation: ${fadeIn} 0.3s forwards;
`;
