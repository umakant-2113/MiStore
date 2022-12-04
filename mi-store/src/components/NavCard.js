import React from 'react';
import '../styles/NavCard.css';

const NavCard = ({ name, price, image, index }) => {
//   console.log(name, price, image, index, 'data from nav card');
  return (
    <div className='NavCard'>
      <img src={image} alt={`${index} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default NavCard;
