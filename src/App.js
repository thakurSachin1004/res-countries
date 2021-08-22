import React, { useState } from 'react';
import Header from './container/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './container/styles/globalStyles';
import {
  lightTheme,
  darkTheme,
} from './container/styles/Theme';
import styled from 'styled-components';
import RouteContainer from './container/route';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light');
  };

  return (
    <ThemeProvider
      theme={theme === 'light' ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <div className="App">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <StyledDiv>
          <RouteContainer />
        </StyledDiv>
      </div>
    </ThemeProvider>
  );
}

export default App;

const StyledDiv = styled.div`
  padding: 10px 80px;

  @media (max-width: 475px) {
    padding: 10px 14px;
  }
`;
