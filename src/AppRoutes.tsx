import React from 'react';
import { useRoutes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AppPage from './pages/AppPage';
import HelloPage from './pages/HelloPage';
import HomePage from './pages/HomePage';

const AppRoutes = () =>
  useRoutes([
    {
      path: '/',
      element: <AppPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/hello/:name', element: <HelloPage /> },
        { path: 'about', element: <AboutPage /> },
      ],
    },
  ]);

export default AppRoutes;
