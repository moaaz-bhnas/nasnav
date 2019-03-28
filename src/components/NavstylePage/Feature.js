import React from 'react';
import './Feature.scss';

const Feature = (props) => {
  const {image, title, paragraph} = props.featureData;
  return (
    <React.Fragment>
      <li className="feature">
        <div className="feature__iconWrapper">
          <img src={image} alt="" className="image image_size_full feature__icon"/>
        </div>
        <h3 className="feature__title">{title}</h3>
        <p className="paragraph paragraph_line_high paragraph_color_grey">
          {paragraph}
        </p>
      </li>
    </React.Fragment>
  );
}

export default Feature;