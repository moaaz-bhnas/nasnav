import React from 'react';
import Header from '../../components/header/Header';
import About from './About';
import ServiceSection from '../../components/service/ServiceSection';
import homePageImages from '../../pages-images/home-page-images';
const {tablet, tabletSm, phone, phoneSm, googleIcon, bingIcon, serviceImage1, serviceImage2, serviceImage6} = homePageImages;

const pageName = 'home';
const header = {
  text: {
    paragraphs: [
      'Get connected and start providing customer-centric.',
      'Let us create a special tour within your eCommerce website using a unique platform that allows you to creators 360 tours, selection of attractive web theme and of course multi store inventory which is based on consumers location.'
    ],
    button: 'Get Started'
  },
  images: [
    {lg: tablet, sm: tabletSm, alt: 'NasNav platform opened on a tablet'},
    {lg: phone,  sm: phoneSm,  alt: 'NasNav platform opened on a phone'}
  ]
}
const services = [
  {
    name: 'navbox',
    imageContainer: {
      classes: [
        'service__imageContainer_widthOnlargeScreen_half',
        'service__imageContainer_floatOnlargeScreen_right',
        'service__imageContainer_width_limited',
        'service__imageContainer_positionOnSmallScreen_center'
      ],
      image: {
        src: serviceImage1,
        alt: 'NasNav website opened on a laptop',
        classes: [
          'service__image',
          'service__image_width_full'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_lessThanHalf',
      'service__content_floatOnlargeScreen_left'
    ],
    paragraphs: [
      'Attract more consumers to your store.',
      '*NavBox* get your stores and products seen higher up in Google or Bing search results.',
      'Here at NasNav we designed a device called the NavBox that plugs into a stores barcode scanner. The box picks up products codes and uses that to showcase your products to be seen on Google or Bing search results'
    ],
    steps: [
      { 
        iconAlt: '',
        text: 'Just plug in the NasNav Box'
      },
      { 
        iconAlt: '',
        text: 'Your Products appear online'
      },
      {
        iconAlt: '',
        text: 'Come up on',
        googleIcon: googleIcon,
        bingIcon: bingIcon
      }
    ],
    buttons: [
      {text: 'Download PDF', backgroundColor: 'blue'}
    ]
  },
  {
    name: 'styles',
    imageContainer: {
      classes: [
        'service__imageContainer_widthOnlargeScreen_half',
        'service__imageContainer_floatOnlargeScreen_left'
      ],
      image: {
        src: serviceImage2,
        alt: 'multiple screens showing various styles',
        classes: [
          'service__image',
          'service__image_extend_left'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_lessThanHalf',
      'service__content_floatOnlargeScreen_right'
    ],
    paragraphs: [
      'Why have one website when you can select from a load!',
      '*+20 Themes* styles you can choose between',
      'With a wide selection of web or mobile-responsive themes suitable for retails industry, anyone can start selling their products online now.',
      'Our leading eCommerce website builder gives you full control over your website\'s look and feel, and you have total access to your theme so you can customize them to match your brand.'
    ],
    steps: [
      { 
        iconAlt: '',
        text: 'Functionality and tools like Quick Cart, Recently Viewed items, Single page checkout, and more…'
      },
      { 
        iconAlt: '',
        text: 'Our themes are crafted by professional designers who specialize in e-commerce. Every theme is beautiful, fully responsive, easy to customize and designed to sell more.'
      }
    ],
    buttons: [
      {text: 'Download PDF', backgroundColor: 'blue'},
      {text: 'Live Demo', backgroundColor: 'green'}
    ]
  },
  {
    name: 'view360',
    hasPopup: true
  },
  {
    name: 'controlPanel',
    controlPanel: true
  },
  {
    name: 'dashboard',
    imageContainer: {
      classes: [],
      image: {
        src: serviceImage6,
        alt: 'NasNav dashboard',
        classes: [
          'service__image',
          'service__image_width_full'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_lessThanHalf',
      'service__content_floatOnlargeScreen_right'
    ],
    paragraphs: [
      '',
      '*Dashboard* to manage your store and results',
      'Our team is proud to announce the new sophisticated dashboard for which store owners can manage and monitor all key reporting metrics.',
      'NasNav Admin is ready for the world so everyone can start benefiting from this unique all integrated omnichannel platform that all you to multiple ways for your consumers to engage with your store smoothly.'
    ],
    buttons: [
      {text: 'Download PDF', backgroundColor: 'blue'},
    ]
  }
];

const HomePage = () => {
  return (
    <React.Fragment>
      <Header 
        pageName={pageName}
        contentWidth={'overHalf'}
        imageWidth={'lessThanHalf'}
        text={header.text}
        images={header.images}
      />
      <About />
      <ServiceSection
        pageName={pageName}
        services={services} 
      />
    </React.Fragment>
  );
}

export default HomePage;