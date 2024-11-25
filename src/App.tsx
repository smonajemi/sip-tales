import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './theme/styles';
import CustomLoader from './components/CustomLoader';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<CustomLoader message="Loading..." />}>
        <Container maxWidth="lg" style={{ position: 'relative' }}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Container>
      </Suspense>
    </ThemeProvider>
  );
}

export default function Root() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL || ''}>
      <App />
    </BrowserRouter>
  );
}

