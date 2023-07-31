import * as React from 'react';
import {Button} from 'baseui/button';
import {useStyletron} from 'baseui';
import Layout from '../components/layout';

export const sum = (a: number, b: number) => a + b;

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <Layout />
  );
};

export default Index;
