import React from 'react';
import './Service.scss';
import PropTypes from 'prop-types';

const Service = (props) => {
  const {name, introSentence, details, image} = props;

  return (
    <article className="service">
      <img src={image} alt="Laptop" className="image service__image" />
      <div className="service__content">
        <h3 className="service__title">{name}</h3>
        <p className="paragraph paragraph_size_large service__paragraph">{introSentence}</p>
        <p className="paragraph paragraph_line_high paragraph_color_grey">{details}</p>
      </div>
    </article>
  );
}

Service.propTypes = {
  name: PropTypes.string,
  introSentence: PropTypes.string,
  details: PropTypes.string,
  image: PropTypes.string
}

export default Service;