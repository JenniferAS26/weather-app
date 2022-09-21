import React from 'react';
import '@styles/CardContainer.scss';

const CardContainer = () => {
  return (
    <section className="card-wrapper">
      <div className="favSection">
        <p className="date">Time zone</p>
        <p className="hour">Country</p>
      </div>
      <div className="temperature">
        <h1 className="degrees">21°C</h1>
        <div className="icon">
          <img src="https://www.weatherbit.io/static/img/icons/t01d.png" alt="Nombre de la película" className="weather-img"/>
          <p className="dayDescription">Sunny</p>
        </div>
      </div>
      <p className="city">City name</p>
    </section>
  );
};

export default CardContainer;