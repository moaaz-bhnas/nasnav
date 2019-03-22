import React from 'react';
import laptop1 from '../../../image/laptop-1.png';
import laptop2 from '../../../image/laptop-2.png';
import laptop3 from '../../../image/laptop-3.png';
import Service from './Service';
import './ServiceList.scss';

const ServiceList = () => {
  const services = [
    {
      name: 'Navbox Editor',
      introSentence: 'Organize your form as you want.shaving in google sky',
      details: 'You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.',
      image: laptop1
    },
    {
      name: '360 view in navbox',
      introSentence: 'Displays all your branches and products 360 technology',
      details: 'Fugiat sunt quisquam. Et dolorem id magni soluta optio accusantium occaecati. Id vitae architecto. Enim dignissimos corporis sunt molestiae enim. Doloribus rem quisquam iste officia impedit voluptatum sunt aut. Vel autem reiciendis illo.',
      image: laptop2
    },
    {
      name: 'Navbox Editor',
      introSentence: 'Organize your form as you want.shaving in google sky',
      details: 'You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.',
      image: laptop3
    }
  ]

  return (
    <ul className="list serviceList serviceSection__serviceList">
      {
        services.map((service, index) => {
          const {name, introSentence, details, image} = service;
          return (
            <li key={index} className="serviceList__item">
              <Service 
                name={name}
                introSentence={introSentence}
                details={details}
                image={image}
              />
            </li>
          );
        })
      }                                    
    </ul>
  );
}

export default ServiceList;