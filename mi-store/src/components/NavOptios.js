import React, { useState, useEffect } from 'react';
import NavCard from './NavCard.js';
import '../styles/NavOptios.css';

const NavOptios = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  console.log(laptop);
  return (
    <div className='navOptions'>
      {miPhones?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}

      {redmiPhones?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}

      {tv?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}

      {laptop?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}

      {fitnessAndLifeStyle?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}

      {home?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}

      {audio?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}

      {accessories?.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default NavOptios;
