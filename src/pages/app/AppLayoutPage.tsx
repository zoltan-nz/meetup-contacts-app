import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import ButtonAppBar from '../../components/ButtonAppBar';

const AppLayoutPage: FC = () => (
  <>
    <ButtonAppBar />
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="/contacts">Contacts</NavLink> | <NavLink to="/about">About</NavLink>{' '}
      | <NavLink to="/admin">Admin</NavLink>
    </nav>
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default AppLayoutPage;
