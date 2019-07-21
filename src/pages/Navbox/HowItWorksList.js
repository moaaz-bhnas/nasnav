import React from 'react';
import './HowItWorksList.scss';
import thriller1 from '../../image/thriller1.png';
import thriller2 from '../../image/thriller2.png';
import thriller3 from '../../image/thriller3.png';

const HowItWorksList = () => {
  return (
    <ul className="list howItWorksList navboxPage__howItWorksList">
      <li className="navboxStep">
        <img className="navboxStep__image" src={thriller1} alt=""/>
        <h3 className="navboxStep__title">Start Scan</h3>
        <p className="paragraph navboxStep__paragraph paragraph_line_high paragraph_color_grey paragraph_shortened_small paragraph_centered">
          Do a scan of your products in your shop through your subscription hi with us get your position
        </p>
      </li>
      <li className="navboxStep">
        <img className="navboxStep__image" src={thriller2} alt=""/>
        <h3 className="navboxStep__title">Elly goes NavBox</h3>
        <p className="paragraph navboxStep__paragraph paragraph_line_high paragraph_color_grey paragraph_shortened_small paragraph_centered">
          Do a scan of your products in your shop through your subscription hi with us get your position
        </p>
      </li>
      <li className="navboxStep">
        <img className="navboxStep__image" src={thriller3} alt=""/>
        <h3 className="navboxStep__title">NavBox&Google</h3>
        <p className="paragraph navboxStep__paragraph paragraph_line_high paragraph_color_grey paragraph_shortened_small paragraph_centered">
          Do a scan of your products in your shop through your subscription hi with us get your position
        </p>
      </li>
    </ul>
  );
}

export default HowItWorksList;