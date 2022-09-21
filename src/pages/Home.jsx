import React from 'react';
import Header from '@components/Header';
import CardContainer from '@containers/CardContainer';
import SearchingContainer from '@containers/SearchingContainer';

const Home = () => {
  return (
    <>
      <Header/>
      <SearchingContainer/>
      <CardContainer/>
    </>
  );
};

export default Home;