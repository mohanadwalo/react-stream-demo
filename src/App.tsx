import React from 'react';

import './App.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './layout/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeaderBoard from './pages/LeaderBoard';
import Layout from './layout/layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LeaderBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
