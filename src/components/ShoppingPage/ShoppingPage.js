import React from 'react';
import Header from '../header/Header';
import phone from '../../image/shopping-header-image.png';
import serviceImage1 from '../../image/shopping-seo-phones.png';
import serviceImage2 from '../../image/shopping-seo-phones2.png';
import serviceImage3 from '../../image/marketing-image.png';
import Thriller from '../thriller/Thriller';
import ServiceSection from '../service/ServiceSection';

const ShoppingPage = () => {
  const pageName = 'shopping';
  const header = {
    text: {
      paragraphs: [
        '*Choose* examples to show products to your customers',
        'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
      ],
      button: 'Get Started'
    },
    images: [
      {src: phone, alt: 'A shopping website built by NasNav web builder'}
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
      name: 'seo',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_overHalf',
            'service__imageContainer_floatOnlargeScreen_right',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage1,
              alt: 'Shop website craeted by NasNav web builder opened on a smart phone',
              classes: [
                'service__image',
                'service__image_style_normal',
                'service__image_upOnlargeScreen_high'
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
      name: 'seo2',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_overHalf',
            'service__imageContainer_floatOnlargeScreen_left',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage2,
              alt: 'Shop website craeted by NasNav web builder opened on a smart phone',
              classes: [
                'service__image',
                'service__image_style_normal',
                'service__image_upOnlargeScreen_high'
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
        'You are the strongest in Google results',
        '*Easily* and super fast your name becomes the best in Google',
        'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'}
      ]
    },
    {
      textOnly: true,
      name: 'statistics',
      paragraphs: [
        '*Quick statistics* and details of all the tasks you performed by cashier',
        'Some pages in can find out what\'s new and special for your customer details and the work carried out through the application'
      ]
    },
    {
      name: 'seo3',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_overHalf',
            'service__imageContainer_floatOnlargeScreen_right',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage1,
              alt: 'Shop website craeted by NasNav web builder opened on a smart phone',
              classes: [
                'service__image',
                'service__image_style_normal',
                'service__image_upOnlargeScreen_high'
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
      name: 'marketing',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_overHalf',
            'service__imageContainer_floatOnlargeScreen_right',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage3,
              alt: 'Shop website craeted by NasNav web builder opened on a laptop',
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
        'Loyalty system',
        'Loyalty programs are structured marketing startegies',
        'In marketing generally and in retailing more specifically, aloyality card, reward card, points card, advantage card, or club card is a blastic or paper card, visually similar to a credit card',
        'By presenting such a card, purchasers typically earn future purchases.'
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'}
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
      <ServiceSection 
        pageName={pageName}
        services={services} 
      />
    </React.Fragment>
  );
}

export default ShoppingPage;