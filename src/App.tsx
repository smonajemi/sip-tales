import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import { ThemeProvider, Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import theme from '../src/theme/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <Container maxWidth="lg">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
