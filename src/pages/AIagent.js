import React, { useState } from 'react';
import {
  RiSendPlaneFill, RiStopCircleFill, RiMoonFill, RiSunFill,
} from 'react-icons/ri';
import {
  Header,
  Title,
  ThemeToggleButton,
  ContentArea,
  EmptyStateMessage,
  InputForm,
  StyledInput,
  SubmitButton,
  ButtonIcon,
} from '../AI-agent/components/StyledComponents';
import { LoadingAnimation } from '../AI-agent/components/LoadingAnimation';
import { ResponseDisplay } from '../AI-agent/components/ResponseDisplay';

function AIagent({ toggleTheme, isDarkMode }) {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    setResponse('');

    // Simulate AI processing
    const mockResponse = "Thank you for your question. I'm an AI assistant designed to help with various tasks. I can provide information, assist with coding, answer questions, and more. How else can I help you today?";

    // Simulate typing effect
    let displayedResponse = '';
    for (let i = 0; i < mockResponse.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 15 + Math.random() * 30));
      displayedResponse += mockResponse[i];
      setResponse(displayedResponse);
    }

    setIsProcessing(false);
  };

  const handleStop = () => {
    setIsProcessing(false);
  };

  return (
    <>
      <Header>
        <Title>AI Copilot</Title>
        <ThemeToggleButton type="button" onClick={toggleTheme}>
          {isDarkMode ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
        </ThemeToggleButton>
      </Header>
      <ContentArea>
        {response ? (
          <ResponseDisplay response={response} />
        ) : (
          <EmptyStateMessage>{isProcessing ? <LoadingAnimation /> : 'Ask me anything...'}</EmptyStateMessage>
        )}
      </ContentArea>

      <InputForm>
        <StyledInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isProcessing}
        />
        <SubmitButton
          type={isProcessing ? 'button' : 'submit'}
          onClick={isProcessing ? handleStop : handleSubmit}
          isProcessing={isProcessing}
        >
          <ButtonIcon>
            {isProcessing ? <RiStopCircleFill size={18} /> : <RiSendPlaneFill size={18} />}
          </ButtonIcon>
        </SubmitButton>
      </InputForm>
    </>
  );
}

export default AIagent;
