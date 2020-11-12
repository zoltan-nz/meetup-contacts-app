import React from 'react';
import { useRoutes } from 'react-router-dom';
import AboutPage from './pages/app/AboutPage';
import AdminIndexPage from './pages/admin/AdminIndexPage';
import AdminLayoutPage from './pages/admin/AdminLayoutPage';
import AppIndexPage from './pages/app/AppIndexPage';
import AppLayoutPage from './pages/app/AppLayoutPage';
import ContactPage from './pages/app/contacts/ContactPage';
import ContactsIndexPage from './pages/app/contacts/ContactsIndexPage';
import ContactsLayoutPage from './pages/app/contacts/ContactsLayoutPage';

const AppRoutes = () =>
  useRoutes([
    {
      path: '/',
      element: <AppLayoutPage />,
      children: [
        { path: '/', element: <AppIndexPage /> },
        {
          path: '/contacts',
          element: <ContactsLayoutPage />,
          children: [
            { path: '/', element: <ContactsIndexPage /> },
            { path: '/:id', element: <ContactPage /> },
          ],
        },
        { path: 'about', element: <AboutPage /> },
      ],
    },
    {
      path: '/admin',
      element: <AdminLayoutPage />,
      children: [{ path: '/', element: <AdminIndexPage /> }],
    },
  ]);

export default AppRoutes;
