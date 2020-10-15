import React, { FC } from 'react';
import HelloWorld from '../components/HelloWorld';

const HomePage: FC = () => (
  <>
    <h1>Home Page</h1>

    <HelloWorld name="Team" />
  </>
);

export default HomePage;
