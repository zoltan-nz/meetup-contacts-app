import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import Header from '../../components/Header';

const AppIndexPage: FC = () => (
  <>
    <Header title="Home Page"/>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </>
);

export default AppIndexPage;
