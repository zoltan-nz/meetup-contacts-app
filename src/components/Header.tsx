import React, { FC } from 'react';

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ children, title }) => {
  if (title) {
    return <h1>{title}</h1>
  }

  return <h1>{children}</h1>
}


export default Header;
