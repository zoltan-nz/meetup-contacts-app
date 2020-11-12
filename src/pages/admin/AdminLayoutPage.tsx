import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header';

const AdminLayoutPage: FC = () => (
  <>
    <NavLink to="/">{'<< Back to Home Page'}</NavLink>
    <Header>Admin</Header>
    <Outlet />
  </>
);

export default AdminLayoutPage;
