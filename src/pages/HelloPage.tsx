import React, { FC, useState } from 'react';
import { useParams } from 'react-router';
import HelloWorld from '../components/HelloWorld';

const HelloPage: FC = () => {
  const [counter, setCounter] = useState(0);
  const { name } = useParams();

  return (
    <>
      <h1>Hello Page</h1>

      <HelloWorld name={name} />
      <p>{counter}</p>

      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </>
  );
};

export default HelloPage;
