import React from 'react';
import Header from '../header/Header';
import About from './About';
import ServiceSection from '../service/ServiceSection';
import homePageImages from '../../pages-images/home-page-images';
const {tablet, phone, googleIcon, serviceImage1, serviceImage2, serviceImage4, serviceImage5, serviceImage6, controlBadge1, controlBadge2, controlBadge3} = homePageImages;

const pageName = 'home';
const header = {
  text: {
    paragraphs: [
      '*NasNav* is the  Next Generation of big businesses Data!',
      'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
    ],
    button: 'Get Started'
  },
  images: [
    {src: tablet, alt: 'NasNav platform opened on a tablet'},
    {src: phone, alt: 'NasNav platform opened on a phone'}
  ]
}
const services = [
  {
    name: 'navbox',
    imageContainers: [
      {
        classes: [
          'service__imageContainer_widthOnlargeScreen_half',
          'service__imageContainer_floatOnlargeScreen_right',
          'service__imageContainer_width_limited',
          'service__imageContainer_positionOnSmallScreen_center'
        ],
        images: [
          {
            src: serviceImage1,
            alt: 'NasNav website opened on a laptop',
            classes: [
              'service__image',
              'service__image_width_full'
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
      'Reach the buyer faster',
      '*NavBox* Your products are top Google search',
      'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
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
        googleIcon: googleIcon
      }
    ],
    buttons: [
      {text: 'Download PDF', backgroundColor: 'blue'}
    ]
  },
  {
    name: 'styles',
    imageContainers: [
      {
        classes: [
          'service__imageContainer_widthOnlargeScreen_half',
          'service__imageContainer_floatOnlargeScreen_left'
        ],
        images: [
          {
            src: serviceImage2,
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
        iconAlt: '',
        text: 'Adjust the colors to suit your type of work'
      },
      { 
        iconAlt: '',
        text: 'Edit photos and upload photos that reflect you'
      },
      {
        iconAlt: '',
        text: 'Add you logo and your ways of communication'
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
    imageContainers: [
      {
        classes: [
          'service__imageContainer_widthOnlargeScreen_half',
          'service__imageContainer_floatOnlargeScreen_right'
        ],
        images: [
          {
            src: serviceImage4,
            alt: 'NasNav website opened on a phone',
            classes: [
              'service__image'
            ]
          },
          {
            src: serviceImage5,
            alt: 'NasNav website opened on a tablet',
            classes: [
              'service__image'
            ]
          },
          {
            src: controlBadge1,
            alt: '',
            classes: [
              'service__badge'
            ]
          },
          {
            src: controlBadge2,
            alt: '',
            classes: [
              'service__badge'
            ]
          },
          {
            src: controlBadge3,
            alt: '',
            classes: [
              'service__badge'
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
      'How will my products be displayed?',
      '*Control panel* to edit 360 pictures of branches',
      'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
    ],
    steps: [
      { 
        iconAlt: '',
        text: 'Add and modify products'
      },
      { 
        iconAlt: '',
        text: 'Aditions directions and shapes'
      },
      {
        iconAlt: '',
        text: 'A separate control panel for each branch'
      }
    ],
    buttons: [
      {text: 'Download PDF', backgroundColor: 'blue'}
    ]
  },
  {
    name: 'dashboard',
    imageContainers: [
      {
        classes: [],
        images: [
          {
            src: serviceImage6,
            alt: 'NasNav dashboard',
            classes: [
              'service__image',
              'service__image_width_full'
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
      '*Dashboard* to manage your store and results',
      'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
    ],
    steps: [
      { 
        iconAlt: '',
        text: 'Management of roducts and branches'
      },
      { 
        iconAlt: '',
        text: 'Analysis of results and reciept of orders'
      },
      {
        iconAlt: '',
        text: 'Manage Facebook page and Google analytics'
      }
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