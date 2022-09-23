import React, {useState, useEffect} from 'react';
import axios from "axios";
import '@styles/FavoriteContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';


const FavoriteContent = ({favoritesList, setFavoritesList, element}) => {
  
  const handleRemoveFavoriteButton = (evt) => {
      const favListCopy = [...favoritesList];
      const idx = favoritesList.indexOf(element);
      favListCopy.splice(idx, 1);
      setFavoritesList(favListCopy);
      console.log("Desmarcado");

      const persistedFavorites = JSON.stringify(favListCopy);
      localStorage.setItem('FAV_LIST', persistedFavorites);
  }

  
  const api = axios.create({
    baseURL: 'http://api.weatherbit.io/v2.0/',
  });

  const [data, setData] = useState(null);

  useEffect(()=>{
    const APIKey = 'dd66896daef04227a32dae3350ea2baa';
    const APIUrl = `current?&country=US&city=${element}&key=${APIKey}`
    
    api.get(APIUrl).then((response) => {
      setData(response.data);
    });

  }, []);
  
  if (!data) return null;
  

  return (
    <div className="FavoriteContent">
      <div  className="FavoriteContent-card">
        <div className="top-section">
          <h3 className="top-section__city">{data.data[0].city_name}</h3>
          <button 
            className="top-section__addFav" 
            type="button" 
            onClick={handleRemoveFavoriteButton}
            >
              <FontAwesomeIcon icon={faHeartCrack} className='brokenHeart' />
              </button>
        </div>
        <p className="FavoriteContent-card__temp">
          {data.data[0].temp}
        <span>°C</span>
        </p>
      </div>
    </div>
  );
};

export default FavoriteContent;