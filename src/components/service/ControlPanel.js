import React, { Component } from 'react';
import './ControlPanel.scss';
import phone from '../../image/home-header-phone.png';
import tablet from '../../image/control-tablet.png';
import controlBadge1 from '../../image/control-badge1.png';
import controlBadge2 from '../../image/control-badge2.png';
import controlBadge3 from '../../image/control-badge3.png';
import LazyLoad from "react-lazy-load";

const steps = [
  { 
    iconAlt: '',
    text: 'Seach engine to show case products'
  },
  { 
    iconAlt: '',
    text: 'Naviagtion to location when viewing products'
  },
  {
    iconAlt: '',
    text: 'A separate control panel for each branch'
  }
];

class ControlPanel extends Component {
  state = {  
    imgLoaded: false
  }

  setLoadedToTrue = () => {
    this.setState({ imgLoaded: true });
  }

  render() {
    const { imgLoaded } = this.state;

    return (
      <article className="service controlPanel" role="article"> 
        <div className="service__imageContainer service__imageContainer_widthOnlargeScreen_half service__imageContainer_floatOnlargeScreen_right" >
          <LazyLoad
            debounce={false}
            offsetVertical={500}
          >
            <React.Fragment>
              <img className={`service__image ${imgLoaded ? 'loaded' : null}`} src={phone} alt="NasNav website opened on a phone"/>
              <img className={`service__image ${imgLoaded ? 'loaded' : null}`} src={tablet} alt="NasNav website opened on a tablet" onLoad={this.setLoadedToTrue} />
              <img className={`service__badge ${imgLoaded ? 'loaded' : null}`} src={controlBadge1} alt=""/>
              <img className={`service__badge ${imgLoaded ? 'loaded' : null}`} src={controlBadge2} alt=""/>
              <img className={`service__badge ${imgLoaded ? 'loaded' : null}`} src={controlBadge3} alt=""/>
            </React.Fragment>
          </LazyLoad>
        </div>
        <div className="service__content service__content_widthOnlargeScreen_lessThanHalf service__content_floatOnlargeScreen_left">
          <h3 className="service__title">controlPanel</h3>
          <p className="paragraph paragraph_color_grey">
            How will my products be displayed?
          </p>
          <p className="paragraph service__paragraph paragraph_size_large">
            <strong>AI Customer Engagement</strong>
          </p>
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            NasNav empowers users to rediscover shopping in a visual, personalized and engaging way by utilizing advanced computer vision and deep learning technology. 
          </p>
          <ul className="list stepList">
            {steps.map((step, index) => (
              <li key={index} className="step stepList__step">
                <span aria-hidden="true" className="step__icon"></span>
                {step.text}
              </li>
            ))}
          </ul>
          <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Download PDF</button>
        </div>
      </article>
    );
  }
}

export default ControlPanel;