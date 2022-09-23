import React from 'react';
import '@styles/CardContainer.scss';

const CardContainer = ({ children }) => {
  return (
    <section className="CardContainer">
      {children}
    </section>
  );
};

export default CardContainer;