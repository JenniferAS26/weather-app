import React, { useState } from 'react';
import Header from '@components/Header';
import CardContainer from '@containers/CardContainer';
import SearchingContainer from '@containers/SearchingContainer';
import CardContent from '@components/CardContent';
import FavoritesContainer from '../containers/FavoritesContainer';
import FavoriteContent from '../components/FavoriteContent';


const Home = () => {

  const [data, setData] = useState({
    'data': [
      {
        'temp': 35.5,
        'city_name': 'default',
        weather: {
          'description': 'default',
          'icon': 'c03n'
        },
        'timezone': 'default',
        'country_code': 'default'
      }
    ]
  });

  return (
    <>
      <Header/>
      <SearchingContainer
        data={data}
        setData={setData}
      />
      <CardContainer>
        <CardContent
          data={data}
          setData={setData}
        />
      </CardContainer>
      <FavoritesContainer>
        <FavoriteContent/>
      </FavoritesContainer>
    </>
  );
};

export default Home;