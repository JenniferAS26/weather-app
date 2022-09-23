import React, { useState } from 'react';
import Header from '@components/Header';
import CardContainer from '@containers/CardContainer';
import SearchingContainer from '@containers/SearchingContainer';
import CardContent from '@components/CardContent';
import FavoritesContainer from '../containers/FavoritesContainer';
import FavoriteContent from '../components/FavoriteContent';


const Home = () => {

  const [favoritesList, setFavoritesList] = useState(["33140"]);
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
          favoritesList= {favoritesList}
          setFavoritesList={setFavoritesList}

        />
      </CardContainer>
      <FavoritesContainer>
      {favoritesList.map (element => (
          <FavoriteContent/>
        ))}
      </FavoritesContainer>
    </>
  );
};

export default Home;