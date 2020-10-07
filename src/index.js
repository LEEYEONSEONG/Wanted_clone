import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './Styles/GlobalStyles';
ReactDOM.render(
  <>
    <ThemeProvider theme={{ ...theme }}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
