import React from 'react';
import './Laptop.scss';
import laptop from '../../../image/computer.png';

const Laptop = () => {
  return (
    <div className="headerImageContainer">
      <img className="image headerImageContainer__laptop" src={laptop} alt="Laptop" />
    </div>
  );
}

export default Laptop;