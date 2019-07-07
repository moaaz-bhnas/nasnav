import React, { Component } from 'react';
import website from '../../image/site.png';
import phone from '../../image/phone.png';
import tablet from '../../image/tablet.png';
import './StatisticsSection.scss';
import LazyLoad from 'react-lazy-load';

class StatisticsSection extends Component {
  state = {  
    imgLoaded: false
  }

  setLoadedToTrue = () => {
    this.setState({ imgLoaded: true });
  }

  render() {
    const { imgLoaded } = this.state;

    return (
      <section className="statistics" role="region" aria-labelledby="statistics__title">
        <div className="container">
          <h2 className="statistics__title" id="statistics__title">Statistics</h2>
          <p className="paragraph paragraph_line_high paragraph_size_large statistics__paragraph paragraph_shortened_med">
            Statistics include all tasks for your shop with distinct view
          </p>
          <p className="paragraph paragraph_line_high paragraph_color_grey statistics__paragraph paragraph_shortened_med">
            We've dsigned an integrated system for the cash resgister to be able to implement many features with ease, but we'll explain partial scan and its implementation.
          </p>
          <LazyLoad
            debounce={false}
            offsetVertical={500}
          >
            <div className="statistics__imageContainer">
              <img src={website} alt="Web Site" className={`image statistics__image ${imgLoaded ? 'loaded' : null}`} onLoad={this.setLoadedToTrue} />
            </div>
          </LazyLoad>
        </div>
        <img className="statistics__phone" src={phone} alt="Phone" />
        <img className="statistics__tablet" src={tablet} alt="Tablet" />
      </section>
    );
  }
}

export default StatisticsSection;