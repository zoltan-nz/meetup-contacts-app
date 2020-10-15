import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar: FC = () => (
  <nav>
    <NavLink to="/" end={true}>
      Home
    </NavLink>{' '}
    | <NavLink to="/hello/team">Hello</NavLink> | <NavLink to="/about">About</NavLink>
  </nav>
);

export default NavigationBar;
