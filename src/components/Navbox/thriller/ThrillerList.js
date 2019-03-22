import React from 'react';
import './ThrillerList.scss';
import thriller1 from '../../../image/thriller1.png';
import thriller2 from '../../../image/thriller2.png';
import thriller3 from '../../../image/thriller3.png';

const ThrillerList = () => {
  return (
    <ul className="list thrillerList">
      <li className="thrillerItem">
        <img className="thrillerItem__image" src={thriller1} alt=""/>
        <h3>Start Scan</h3>
        <p className="paragraph paragraph_line_high paragraph_color_grey">
          Do a scan of your products in your shop through your subscription hi with us get your position
        </p>
      </li>
      <li className="thrillerItem">
        <img className="thrillerItem__image" src={thriller2} alt=""/>
        <h3>Start Scan</h3>
        <p className="paragraph paragraph_line_high paragraph_color_grey">
          Do a scan of your products in your shop through your subscription hi with us get your position
        </p>
      </li>
      <li className="thrillerItem">
        <img className="thrillerItem__image" src={thriller3} alt=""/>
        <h3>Start Scan</h3>
        <p className="paragraph paragraph_line_high paragraph_color_grey">
          Do a scan of your products in your shop through your subscription hi with us get your position
        </p>
      </li>
    </ul>
  );
}

export default ThrillerList;