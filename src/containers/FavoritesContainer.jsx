import React from 'react';
import '@styles/FavoritesContainer.scss';

const FavoritesContainer = ({ children }) => {
  return (
    <div className='FavoritesContainer-wrapper'>
      <h2>My favorites</h2>
      <section className='FavoritesContainer'>
        {children}
      </section>
    </div>
  );
};

export default FavoritesContainer;