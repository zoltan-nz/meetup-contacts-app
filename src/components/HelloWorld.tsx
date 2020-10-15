import React, { FC } from 'react';

interface HelloWorldProps {
  name: string;
}

const HelloWorld: FC<HelloWorldProps> = ({ name = 'World' }) => <p>Hello, {name}!</p>;

export default HelloWorld;
