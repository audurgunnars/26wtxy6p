import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CssVarsProvider } from '@mui/joy/styles';
import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import theme from './HeatingSystemModal/UI/theme';

import { lightTheme, darkTheme } from './AI-agent/theme';
import { GlobalStyles } from './globalStyles';
import {
  AppContainer,
} from './AI-agent/components/StyledComponents';
import ModalPage from './pages/ModalPage';
import AIagent from './pages/AIagent';

function AIAgentWrapper({ children, isDarkMode }) {
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

function ModalPageWrapper({ children }) {
  return (
    <CssVarsProvider theme={theme}>
      {children}
    </CssVarsProvider>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route
            path="/"
            element={(
              <ModalPageWrapper>
                <ModalPage />
              </ModalPageWrapper>
)}
          />
          <Route
            path="/ai-agent"
            element={(
              <AIAgentWrapper isDarkMode={isDarkMode}>
                <AIagent toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
              </AIAgentWrapper>
)}
          />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
