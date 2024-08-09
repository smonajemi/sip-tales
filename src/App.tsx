import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from "./config/routes";

function App() {
  return (
    <div className="container mx-auto p-4">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
            
                    <route.component />
            
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
