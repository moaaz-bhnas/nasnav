import React from 'react';
import screens from '../../image/navbox-header-image.png';
import Header from '../header/Header';
import Thriller from '../thriller/Thriller';
import HowItWorksList from './HowItWorksList';
import serviceImage1 from '../../image/navbox.png';
import serviceImage2 from '../../image/seo-phones.png';
import serviceImage3 from '../../image/styles-image.png';
import dot from '../../image/dot.svg';
import ServiceSection from '../service/ServiceSection';
import './NavboxPage.scss';

const NavboxPage = () => {
  const pageName = 'navbox';
  const header = {
    text: {
      paragraphs: [
        '*Device* download all your products on Google search engine',
        'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
      ],
      button: 'Get Started'
    },
    images: [
      {src: screens, alt: 'NasNav platform opened on a tablet'}
    ]
  }
  const thriller = {
    paragraphs: [
      'Simple steps away from fame',
      'Through a few simple steps can make your shop up to the public quickly.'
    ]
  }
  const services = [
    {
      name: 'navbox2',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_half',
            'service__imageContainer_floatOnlargeScreen_left',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage1,
              alt: 'Nasbox device',
              classes: [
                'service__image',
                'service__image_style_normal'
              ]
            }
          ]
        }
      ],
      contentClasses: [
        'service__content_widthOnlargeScreen_lessThanHalf',
        'service__content_floatOnlargeScreen_right'
      ],
      paragraphs: [
        'You\'ll get the device wherever you are',
        '*We ship* a device to one of your branches to connect and get results',
        'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'}
      ]
    },
    {
      name: 'seo',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_half',
            'service__imageContainer_floatOnlargeScreen_right',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage2,
              alt: 'NasNav websites appearing on top of Google results',
              classes: [
                'service__image',
                'service__image_style_normal'
              ]
            }
          ]
        }
      ],
      contentClasses: [
        'service__content_widthOnlargeScreen_lessThanHalf',
        'service__content_floatOnlargeScreen_left'
      ],
      paragraphs: [
        'You are the strongest in Google results',
        '*Easily* and super fast your name becomes the best in Google',
        'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'}
      ]
    },
    {
      name: 'styles2',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_half',
            'service__imageContainer_floatOnlargeScreen_left'
          ],
          images: [
            {
              src: serviceImage3,
              alt: 'multiple screens showing various styles',
              classes: [
                'service__image',
                'service__image_extend_left'
              ]
            }
          ]
        }
      ],
      contentClasses: [
        'service__content_widthOnlargeScreen_lessThanHalf',
        'service__content_floatOnlargeScreen_right'
      ],
      paragraphs: [
        'How will my products be displayed?',
        '*+10 Navbox* styles you can choose between',
        'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
      ],
      steps: [
        {
          iconSrc: dot,
          iconAlt: '',
          text: 'Adjust the colors to suit your type of work'
        },
        {
          iconSrc: dot,
          iconAlt: '',
          text: 'Edit photos and upload photos that reflect you'
        },
        {
          iconSrc: dot,
          iconAlt: '',
          text: 'Add you logo and your ways of communication'
        }
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'},
        {text: 'Live Demo', backgroundColor: 'green'}
      ]
    }
  ];
  return (
    <React.Fragment>
      <Header 
        pageName={pageName}
        contentWidth={'half'}
        imageWidth={'half'}
        text={header.text}
        images={header.images}
      />
      <Thriller paragraphs={thriller.paragraphs} />
      <HowItWorksList />
      <ServiceSection 
        pageName={pageName}
        services={services} 
      />
    </React.Fragment>
  );
}

export default NavboxPage;