import React from 'react';
import Header from '../header/Header';
import tablet from '../../image/home-header-tablet.png';
import phone from '../../image/home-header-phone.png';
import About from './About';
import dot from '../../image/dot.svg';
import googleIcon from '../../image/google.png';
import serviceImage1 from '../../image/navbox-image.png';
import serviceImage2 from '../../image/styles-image.png';
import serviceImage3 from '../../image/360-laptop.png';
import serviceImage4 from '../../image/home-header-phone.png';
import serviceImage5 from '../../image/control-tablet.png';
import serviceImage6 from '../../image/dashboard-image.png';
import googleBadge from '../../image/google-badge.png';
import view360Badge from '../../image/360-badge.png';
import onlinePaymentBadge from '../../image/online-badge.png';
import designEditorBadge from '../../image/design-badge.png';
import barcode from '../../image/barcode.png';
import badge360 from '../../image/360.png';
import eye from '../../image/eye.png';
import chair from '../../image/chair.png';
import modal from '../../image/modal.png';
import ServiceSection from '../service/ServiceSection';
import controlBadge1 from '../../image/control-badge1.png';
import controlBadge2 from '../../image/control-badge2.png';
import controlBadge3 from '../../image/control-badge3.png';
import dashboardBadge1 from '../../image/dashboard-badge1.png';
import dashboardBadge2 from '../../image/dashboard-badge2.png';
import stepicon2 from '../../image/step-icon2.png';
import stepicon3 from '../../image/step-icon3.png';
import stepicon4 from '../../image/step-icon4.png';
import stepicon5 from '../../image/step-icon5.png';
import stepicon6 from '../../image/step-icon6.png';
import stepicon7 from '../../image/step-icon7.png';
import stepicon8 from '../../image/step-icon8.png';
import stepicon9 from '../../image/step-icon9.png';
import stepicon10 from '../../image/step-icon10.png';
import stepicon11 from '../../image/step-icon11.png';
import stepicon12 from '../../image/step-icon12.png';

const HomePage = () => {
  const pageName = 'home';
  const header = {
    text: {
      paragraphs: [
        '*NasNav* is the Next Generation of big businesses Data!',
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
            },
            {
              src: googleBadge,
              alt: 'Google badge',
              classes: ['service__googleBadge']
            },
            {
              src: barcode,
              alt: 'Barcode being scanned',
              classes: ['service__barcode']
            },
            {
              src: onlinePaymentBadge,
              alt: 'Online payment',
              classes: ['service__onlinePaymentBadge']
            },
            {
              src: designEditorBadge,
              alt: 'Design editor',
              classes: ['service__designEditorBadge']
            },
            {
              src: view360Badge,
              alt: '360 view',
              classes: ['service__360ViewBadge']
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
          iconSrc: dot,
          iconAlt: '',
          text: 'Just plug in the NasNav Box'
        },
        {
          iconSrc: stepicon2,
          iconAlt: '',
          text: 'Your Products appear online'
        },
        {
          iconSrc: stepicon3,
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
          iconSrc: stepicon4,
          iconAlt: '',
          text: 'Adjust the colors to suit your type of work'
        },
        {
          iconSrc: stepicon5,
          iconAlt: '',
          text: 'Edit photos and upload photos that reflect you'
        },
        {
          iconSrc: stepicon6,
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
      imageContainers: [
        {
          classes: [],
          images: [
            {
              src: serviceImage3,
              alt: 'Laptop',
              classes: [
                'service__image',
                'service__image_width_full'
              ]
            },
            {
              src: badge360,
              alt: '360 view',
              classes: [
                'service__360Badge'
              ]
            },
            {
              src: eye,
              alt: '',
              classes: [
                'service__eye'
              ]
            }
          ]
        },
        {
          classes: ['chair'],
          images: [
            {
              src: chair,
              alt: 'Chair',
              classes: [
                'chair__image'
              ]
            },
            {
              src: modal,
              alt: '',
              classes: [
                'chair__modal'
              ]
            },
            {
              src: eye,
              alt: '',
              classes: [
                'chair__eye'
              ]
            }
          ],
          chair: true
        }
      ],
      contentClasses: [],
      paragraphs: [
        'Once your customers have a fun experience using 360 technology',
        '*A new shopping* experience for your customers',
        'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'},
        {text: 'Live Demo', backgroundColor: 'green'}
      ]
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
          iconSrc: stepicon7,
          iconAlt: '',
          text: 'Add and modify products'
        },
        {
          iconSrc: stepicon8,
          iconAlt: '',
          text: 'Aditions directions and shapes'
        },
        {
          iconSrc: stepicon9,
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
            },
            {
              src: dashboardBadge1,
              alt: 'Total visits',
              classes: ['service__badge']
            },
            {
              src: dashboardBadge2,
              alt: 'Total Sales',
              classes: ['service__badge']
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
          iconSrc: stepicon10,
          iconAlt: '',
          text: 'Management of roducts and branches'
        },
        {
          iconSrc: stepicon11,
          iconAlt: '',
          text: 'Analysis of results and reciept of orders'
        },
        {
          iconSrc: stepicon12,
          iconAlt: '',
          text: 'Manage Facebook page and Google analytics'
        }
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'},
      ]
    }
  ];
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