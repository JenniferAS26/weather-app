import React, { useState } from 'react';
import Header from '@components/Header';
import CardContainer from '@containers/CardContainer';
import SearchingContainer from '@containers/SearchingContainer';
import CardContent from '@components/CardContent';
import FavoritesContainer from '@containers/FavoritesContainer';
import FavoriteContent from '@components/FavoriteContent';


const Home = () => {
  let localStorageFavorites = localStorage.getItem('FAV_LIST');
  let parsedFavorites = [];
  if (!localStorageFavorites) {
    localStorage.setItem('FAV_LIST', JSON.stringify([]));
  } else {
    parsedFavorites = JSON.parse(localStorageFavorites);
  }

  const [favoritesList, setFavoritesList] = useState(parsedFavorites);
  const [data, setData] = useState(
    {
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
  }
  );
  

  
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
          <FavoriteContent
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
            element={element}
            key={element}
          />
        ))}
      </FavoritesContainer>
    </>
  );
};

export default Home;