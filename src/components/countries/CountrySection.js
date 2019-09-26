import React from 'react';
import CountryDetails from './CountryDetails';
import './CountrySection.scss';
import Map from './Map';
import Slider from '../slider/Slider';

const CountrySection = () => {
  const countriesDetails = [
    {
      name: 'Egypt',
      phone: '01206411114',
      mail: 'franchising@nasnav.com'
    },
    {
      name: 'Saudi Arabia',
      phone: '966533077772',
      mail: 'dhari@nasnav.com'
    },
    {
      name: 'Nigeria',
      phone: '2348032056154',
      mail: 'aliu.ajao@nasnav.com'
    },
    {
      name: 'Poland',
      phone: '48500169262',
      mail: 'marek.zachara@nasnav.com'
    },
  ];

  return (
    <section className="countries" role="region" aria-labelledby="countries__title">
      <div className="container">
        <h2 className="countries__title" id="countries__title">Countries where we offer our services</h2>
        <p className="paragraph paragraph_color_grey countries__paragraph">
          We started and we are growing right around the world…
        </p>
        <p className="paragraph paragraph_size_med countries__paragraph">
          {/* <strong>Where do</strong> we go and offer our services? */}
        </p>
        <p className="paragraph paragraph_line_high paragraph_color_grey paragraph_shortened_large countries__paragraph">
          We can provide you with a complete ‘Business-in-a-Box’ solution. Join our franchising scheme and be a part of the team. Build your business with confidence knowing you are backed by expert. 
        </p>
        <Map />
        <ul className="list countryList countries__countryList">
          {
            countriesDetails.map((countryDetails, index) => {
              const {name, location, phone, mail} = countryDetails;
              return (
                <li key={index} className="country countryList__country">
                  <CountryDetails 
                    name={name}
                    location={location}
                    phone={phone}
                    mail={mail}
                  />
                </li>
              );
            })
          }
        </ul>
        <Slider 
          sliderType="countrySlider"
          sliderSize='small'
          slides={countriesDetails}
          visibleSlidesNum={1}
        />
      </div>
    </section>
  );
}

export default CountrySection;