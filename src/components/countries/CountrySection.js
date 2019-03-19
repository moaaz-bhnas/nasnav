import React from 'react';
import CountryDetails from './CountryDetails';
import './CountrySection.scss';
import Map from './Map';

const CountrySection = () => {
  const countriesDetails = [
    {
      name: 'london',
      location: 'The United Kingdom latitude and -0.13',
      phone: '0052635458',
      mail: 'london@nasorg.co'
    },
    {
      name: 'Egypt',
      location: 'The United Kingdom latitude and -0.13',
      phone: '0052635458',
      mail: 'egypt@nasorg.co'
    },
    {
      name: 'Kuwait',
      location: 'The United Kingdom latitude and -0.13',
      phone: '0052635458',
      mail: 'kuwait@nasorg.co'
    },
    {
      name: 'Nigeria',
      location: 'The United Kingdom latitude and -0.13',
      phone: '0052635458',
      mail: 'nigeria@nasorg.co'
    },
    {
      name: 'Poland',
      location: 'The United Kingdom latitude and -0.13',
      phone: '0052635458',
      mail: 'poland@nasorg.co'
    },
  ];

  return (
    <section className="countries" role="region" aria-labelledby="countries__heading">
      <div className="container">
        <h2 className="countries__title" id="countries__title">Countries where we offer our services</h2>
        <p className="paragraph paragraph_color_grey countries__paragraph">
          In many countries of the world we are present
        </p>
        <p className="paragraph paragraph_size_med countries__paragraph">
          <strong>Where do</strong> we go and offer our services?
        </p>
        <p className="paragraph paragraph_color_grey paragraph_shortened_large countries__paragraph">
          Here at NasNav we designed a device called the route box that plugs into a store barcode scanner we designed a device called the route box that.
        </p>
        <Map />
        <ul className="list countryList countries__countryList">
          {
            countriesDetails.map((countryDetails, index) => {
              const {name, location, phone, mail} = countryDetails;
              return (
                <CountryDetails 
                  key={index}
                  name={name}
                  location={location}
                  phone={phone}
                  mail={mail}
                />
              );
            })
          }
        </ul>
      </div>
    </section>
  );
}

export default CountrySection;