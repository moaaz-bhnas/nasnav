import React from 'react';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro header__intro">
      <p className="paragraph paragraph_size_xLarge paragraph_color_white paragraph_weight_light intro__paragraph">
        <strong>Choose</strong> examples to show products to your customers.
      </p>
      <p className="paragraph paragraph_line_high paragraph_color_white intro__paragraph">
        Our services are not to be reckoned with upload <br />
        Products can sliping in yur home and see theyou an edge <br />
        over the online competitors.of big businesses data
      </p>
      <button className="button button_color_white button_size_large">Get Started</button>
    </div>  
  );
}

export default Intro;