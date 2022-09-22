import React from 'react';
import '@styles/FavoriteContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';


const FavoriteContent = () => {
  return (
    <div className="FavoriteContent">
      <div  className="FavoriteContent-card">
        <div className="top-section">
          <h3 className="top-section__city">City name</h3>
          <button className="top-section__addFav" type="button">
              <FontAwesomeIcon icon={faHeartCrack} className='brokenHeart' />
              </button>
        </div>
        <p className="FavoriteContent-card__temp">
          35
        <span>°C</span>
        </p>
      </div>
    </div>
  );
};

export default FavoriteContent;