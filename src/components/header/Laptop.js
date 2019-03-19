import React from 'react';
import './Laptop.scss';
import laptop from '../../image/computer.png';

const Laptop = () => {
  return (
    <div className="laptopContainer headerImageContainer_width_half">
      <img className="laptopContainer__laptop" src={laptop} alt="Laptop" />
    </div>
  );
}

export default Laptop;