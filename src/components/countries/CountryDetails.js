import React from 'react';
import phoneIcon from '../../image/call.svg';
import mailIcon from '../../image/mail.svg';
import './CountryDetails.scss';

const CountryDetails = (props) => {
  const {name, location, phone, mail} = props;

  return (
    <li className="country countryList__country">
      <h3 className="country__countryName">{name}</h3>
      <p className="country__countryLocation">{location}</p>
      <h4 className="country__customerServicesTitle">Customer Services</h4>
      <ul className="list customerServices">
        <li className="customerServices__item">
          <img className="customerServices__contactIcon" src={phoneIcon} alt="Phone Icon" />
          {phone}
        </li>
        <li className="customerServices__item">
          <img className="customerServices__contactIcon" src={mailIcon} alt="Mail Icon" />
          <span className="customerServices__mail">{mail}</span>
        </li>
      </ul>
    </li>
  );
}

export default CountryDetails;