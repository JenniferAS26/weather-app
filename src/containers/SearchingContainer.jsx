import React from 'react';
import '@styles/SearchingContainer.scss';

const SearchingContainer = () => {
  return (
    <section className="search">
      <form action="/" className='search-form'>
        <input type="text" placeholder="Enter city or Zip code" className="input search-input"/>
        <input className="primary-button search-button" type="submit" value="Search"/>
      </form>
    </section>
  );
};

export default SearchingContainer;