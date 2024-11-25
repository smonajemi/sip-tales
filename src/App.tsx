// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import routes from './config/routes';
// import { ThemeProvider, Container, CssBaseline, Box } from '@mui/material';
// import theme from '../src/theme/styles';
// import CustomLoader from './components/CustomLoader';

// function App() {
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, [location]);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container maxWidth="lg" style={{ position: 'relative' }}>
//         {loading && (
//           <Box
//             position="fixed"
//             top={0}
//             left={0}
//             width="100%"
//             height="100%"
//             bgcolor="rgba(0, 0, 0, 0.9)"
//             zIndex={1300}
//           >
//             <CustomLoader message="Loading..." />
//           </Box>
//         )}
//         <Routes>
//           {routes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               element={<route.component />}
//             />
//           ))}
//         </Routes>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default function Root() {
//   return (
//     <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL || ""}>
//       <App />
//     </BrowserRouter>
//   );
// }

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

