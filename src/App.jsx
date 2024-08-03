import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";

const App = () => (
  <BrowserRouter>
    <Routes>
      {navItems.map(({ to, page }) => (
        <Route key={to} path={to} element={page} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;
