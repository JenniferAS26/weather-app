import React from 'react';
import '@styles/CardContainer.scss';

const CardContainer = ({ children }) => {
  return (
    <section className="CardContainer">
      {children}
      {children}
      {children}
      {children}
    </section>
  );
};

export default CardContainer;