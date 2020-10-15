import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const AppPage: FC = () => (
  <>
    <NavigationBar />
    <aside></aside>
    <main>
      <Outlet />
    </main>
    <footer></footer>
  </>
);

export default AppPage;
