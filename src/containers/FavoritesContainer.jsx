import React from 'react';
import '@styles/FavoritesContainer.scss';

const FavoritesContainer = ({ children }) => {
  return (
    <>
      <h2>My favorites</h2>
      <section className='FavoritesContainer'>
        {children}
      </section>
    </>
    
  );
};

export default FavoritesContainer;