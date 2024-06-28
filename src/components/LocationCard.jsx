import React from 'react';
import './styles/locationCard.css';

const LocationCard = ({info}) => {


  return (
    <article className='locationcard'>
      <h2 className='locationcard__name'>{info?.name}</h2>
      <ul className='locationcard__list'>
        <li className='locationcard__item'><span>Type: </span><span>{info?.type}</span></li>
        <li className='locationcard__item'><span>Dimension: </span><span>{info?.dimension}</span></li>
        <li className='locationcard__item'><span>Population: </span><span>{info?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationCard;