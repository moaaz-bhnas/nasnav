import React from 'react';
import phoneIcon from '../../image/call.svg';
import mailIcon from '../../image/mail.svg';
import './CountryDetails.scss';

const CountryDetails = (props) => {
  const {name, phone, mail} = props;

  return (
    <React.Fragment>
      <h3 className="country__countryName">{name}</h3>
      <h4 className="country__customerServicesTitle">
        {name === 'Egypt' ? 'Franchising support' : 'Local representative'}
      </h4>
      <ul className="list customerServices">
        <li className="customerServices__item">
          <img className="customerServices__contactIcon" src={phoneIcon} alt="Phone Icon" />&nbsp;
          <a href={`tel:${phone}`} className="customerServices__contactLink">+{phone}</a>
        </li>
        <li className="customerServices__item">
          <img className="customerServices__contactIcon" src={mailIcon} alt="Mail Icon" />&nbsp;
          <a href={`mailto:${mail}?cc=khalid.wahab@nasnav.com`} className="customerServices__contactLink">{mail}</a>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default CountryDetails;