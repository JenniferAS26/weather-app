import React, {useState, useEffect} from 'react';
import '@styles/CardContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardContent = ({ data, setData,  favoritesList, setFavoritesList}) => {
  const [checked, setChecked] = useState(false);

  const handleFavoriteButton = (evt) => {
    const favListCopy = [...favoritesList];
    if (evt.target.checked){
      console.log("Marcado");
      favListCopy.push(data.data[0].city_name)
      setFavoritesList(Array.from(new Set(favListCopy)));
      
      const persistedFavorites = JSON.stringify(Array.from(new Set(favListCopy)));
      localStorage.setItem('FAV_LIST', persistedFavorites);
    }
  }

  if (!data) {
    return null;
  }

  const iconURL = `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`;

  useEffect(()=> {
    setChecked(false);
  })
  return (
    <div className='card-wrapper'>
        <div className="zone-section">
          <p className="zone-section__timezone">{data.data[0].timezone}</p>
          <p className="zone-section__country">{data.data[0].country_code}</p>
        </div>
        <div className="temperature">
          <h1 className="temperature__degrees">
          {data.data[0].temp}
          <span>°C</span>
          </h1>
          <div className="icon">
            <img
              src={iconURL}
              alt="weather icon"
              className="icon__weather-img"
            />
            <p className="icon__day-desp">{data.data[0].weather.description}</p>
          </div>
        </div>
        <div className='bottom-section'>
          <div className='bottom-section-container'>
            <div className='bottom-section-container__add-fav'>
              <input type="checkbox" onChange={handleFavoriteButton} checked={checked}/>
              <FontAwesomeIcon icon={faHeart} className='iconFav' />
            </div>
          </div>
          <p className="bottom-section__city">{data.data[0].city_name}</p>
        </div>
      </div>
  );
};

export default CardContent;