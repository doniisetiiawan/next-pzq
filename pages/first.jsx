import React from 'react';
import Layout from '../components/MyLayout';
import { fetchFirstItems } from '../api';

const First = ({ items }) => (
  <Layout>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </Layout>
);

First.getInitialProps = async () => {
  const res = await fetchFirstItems();
  const items = await res.json();

  return { items };
};

export default First;
