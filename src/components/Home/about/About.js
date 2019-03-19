import React from 'react';
import logo from '../../../image/logo-blue.png';
import './About.scss';
import service1 from '../../../image/service-1.png';
import service2 from '../../../image/service-2.png';
import service3 from '../../../image/service-3.png';
import service4 from '../../../image/service-4.png';
import service5 from '../../../image/service-5.png';
import service6 from '../../../image/service-6.png';

const About = () => {
  return (
    <section className="aboutSection" role="region" aria-labelledby="aboutSection__title">
      <div className="container aboutSection__container">
        <h2 className="aboutSection__title" id="aboutSection__title">About</h2>
        <img className="logo logo_size_large" src={logo} alt="NasNav Logo"/>
        <p className=" aboutSection__paragraph paragraph_line_high paragraph_shortened_medLarge">
          We use proven technologies, combining them with new concepts and techniques wherever possible. In this way we rapidly develop tailor-made solutions which incubates location-based and retailers services technologies.
        </p>
        <button className="button button_size_large button_color_white button_back_blue button_shape_oval">Get Started</button>
        <ul className="list serviceIconList">
          <li className="serviceIconList__item">
            <img className="serviceIconList__image" src={service1} alt=""/>
            <span className="serviceIconList__name">Analytics</span>
          </li>
          <li className="serviceIconList__item">
            <img className="serviceIconList__image" src={service2} alt=""/>
            <span className="serviceIconList__name">360° <br /> Editor</span>
          </li>
          <li className="serviceIconList__item">
            <img className="serviceIconList__image" src={service3} alt=""/>
            <span className="serviceIconList__name">NavBox</span>
          </li>
          <li className="serviceIconList__item">
            <img className="serviceIconList__image" src={service4} alt=""/>
            <span className="serviceIconList__name">Google</span>
          </li>
          <li className="serviceIconList__item">
            <img className="serviceIconList__image" src={service5} alt=""/>
            <span className="serviceIconList__name">Online <br /> Payment</span>
          </li>
          <li className="serviceIconList__item">
            <img className="serviceIconList__image" src={service6} alt=""/>
            <span className="serviceIconList__name">Orders</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;