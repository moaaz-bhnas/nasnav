import React from 'react';
import play from '../../../image/play.svg';

const Intro = () => {
  return (
    <div className="intro header__intro header__intro_width_overHalf">
      <p className="paragraph paragraph_size_xLarge paragraph_color_white paragraph_weight_light intro__paragraph">
        <strong>NasNav</strong> is the Next Generation of big businesses Data !
      </p>
      <p className="paragraph paragraph_line_high paragraph_color_white paragraph_letters_spaced paragraph_weight_med intro__paragraph">
        Our services are not to be reckoned with upload Products can sliping <br /> 
        in your home and see theyou an edge over the online competitors <br /> 
        of big businesses data
      </p>
      <button className="button intro__button button_color_blue button_back_white button_size_large button_shape_oval">Watch Video</button>
      <button className="button intro__button button_back_white button_shape_circular button_verticalAlign_middle">
        <img src={play} alt="Watch video" className="image"/>
      </button>
    </div>  
  );
}

export default Intro;