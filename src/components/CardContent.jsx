import React from 'react';
import '@styles/CardContent.scss';

const CardContent = ({ data, setData }) => {
  const zipcode = '15878';

  if (!data) {
    return <div className='App'>Loading...</div>;
  }
  console.log(data);
  const iconURL = `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`;

  return (
    <div className='card-wrapper'>
        <div className="favSection">
          <p className="date">{data.data[0].timezone}</p>
          <p className="hour">{data.data[0].country_code}</p>
        </div>
        <div className="temperature">
          <h1 className="degrees">
          {data.data[0].temp}
          <span>°C</span>
          </h1>
          <div className="icon">
            <img
              src={iconURL}
              alt="weather icon"
              className="weather-img"
            />
            <p className="dayDescription">{data.data[0].weather.description}</p>
          </div>
        </div>
        <p className="city">{data.data[0].city_name}</p>
        
        <p hidden>{zipcode}</p>
      </div>
  );
};

export default CardContent;