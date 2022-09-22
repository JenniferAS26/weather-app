import React, { useState } from 'react';
import '@styles/SearchingContainer.scss';
import axios from 'axios';

const SearchingContainer = ({ data, setData }) => {
  const [searchValue, setSearchValue] = useState();
  
  const api = axios.create({
    baseURL: 'http://api.weatherbit.io/v2.0/',
  });

  const retrieveData = async (input) => {
    let APIUrl = '';
    const APIKey = 'd2e4088b81004ebea1f618ddc76bdd25';

    if (!isNaN(input)) {
      APIUrl = `current?postal_code=${input}&key=${APIKey}`
    } else {
      APIUrl = `current?&country=US&city=${input}&key=${APIKey}`
    }
    const { data, status } = await api.get(APIUrl);
    if (status == 200) {
      setData(data);
    }
    console.log(data);
  }

  const OnSearchValueChange = () => {
    console.log(searchValue);
    retrieveData(searchValue);
  }

  const OnChangeInput = (evt) => {
    setSearchValue(evt.target.value);
  }

  return (
    <section className="search">
      <div action="/" className='search-form'>
        <input type="text" placeholder="Enter city or Zip code" className="input search-input" onChange={OnChangeInput}/>
        <button className="primary-button search-button" type="button" onClick={OnSearchValueChange}>Search</button>
      </div>
    </section>
  );
};

export default SearchingContainer;