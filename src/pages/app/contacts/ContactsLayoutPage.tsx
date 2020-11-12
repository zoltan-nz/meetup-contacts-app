import React, { FC } from 'react';
import { Outlet } from 'react-router';

const ContactsLayoutPage: FC = () => (
  <>
    <Outlet />
  </>
);

export default ContactsLayoutPage;
