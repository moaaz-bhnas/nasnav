import React from 'react';
import headerImage from '../../image/dashboard-header-image.png';
import Thriller from '../thriller/Thriller';
import Header from '../header/Header';
import serviceImage1 from '../../image/dashboard-image2.png';
import serviceImage2 from '../../image/dashboard-image3.png';
import serviceImage3 from '../../image/dashboard-image4.png';
import serviceImage4 from '../../image/dashboard-image7.png';
import ServiceSection from '../service/ServiceSection';

const DashboardPage = () => {
  const pageName = 'dashboard';
  const header = {
    text: {
      paragraphs: [
        '*Device* download all your products on Google search engine',
        'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
      ],
      button: 'Get Started'
    },
    images: [
      {src: headerImage, alt: 'Dashboard opened on a laptop'}
    ]
  }
  const thriller = {
    paragraphs: [
      'Statistics include all tasks for your shop with distinct view',
      'We\'ve dsigned an integrated system for the cash resgister to be able to implement many features with ease, but we\'ll explain partial scan and its implementation.'
    ]
  }
  const services = [
    {
      name: 'dashboard2',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_half',
            'service__imageContainer_floatOnlargeScreen_left'
          ],
          images: [
            {
              src: serviceImage1,
              alt: 'NasNav dashboard',
              classes: [
                'service__image',
                'service__image_extend_left',
                'service__image_upOnlargeScreen_med'
              ]
            }
          ]
        }
      ],
      contentClasses: [
        'service__content_widthOnlargeScreen_45',
        'service__content_floatOnlargeScreen_right'
      ],
      paragraphs: [
        'Navbox Editor',
        'Organize your form as you want.shaving in google sky',
        'You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.'
      ],
      buttons: [
        {text: 'Download PDF', backgroundColor: 'blue'}
      ]
    },
    {
      name: 'dashboard3',
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
              alt: 'NasNav dashboard',
              classes: [
                'service__image'
              ]
            }
          ]
        }
      ],
      contentClasses: [
        'service__content_widthOnlargeScreen_45',
        'service__content_floatOnlargeScreen_left'
      ],
      paragraphs: [
        'Navnav easy and fast.',
        'What do you think of an easy experience !',
        'Sed mollitia ea. Debitis quaerat odit voluptatum consequatur soluta vero. Soluta accusantium dolorem dolor sint quia ut. Consequuntur et repudiandae.',
        'Non iure asperiores dolorum quibusdam. Omnis fugit itaque dolores quo. Eos aut error facilis eum enim aperiam quo.'
      ]
    },
    {
      name: 'dashboard4',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_half',
            'service__imageContainer_floatOnlargeScreen_left',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage3,
              alt: 'NasNav dashboard',
              classes: [
                'service__image',
                'service__image_style_normal'
              ]
            }
          ]
        }
      ],
      contentClasses: [
        'service__content_widthOnlargeScreen_45',
        'service__content_floatOnlargeScreen_right'
      ],
      paragraphs: [
        'Nasnav easy and fast',
        'Control the display of your panoramas in your site !',
        'Sed mollitia ea. Debitis quaerat odit voluptatum consequatur soluta vero. Soluta accusantium dolorem dolor sint quia ut. Consequuntur et repudiandae.',
        'Non iure asperiores dolorum quibusdam. Omnis fugit itaque dolores quo. Eos aut error facilis eum enim aperiam quo.'
      ]
    },
    {
      name: 'payment',
      paymentMethods: true
    },
    {
      name: 'dashboard5',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_half',
            'service__imageContainer_floatOnlargeScreen_left',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: serviceImage4,
              alt: 'NasNav dashboard',
              classes: [
                'service__image',
                'service__image_style_normal'
              ]
            }
          ]
        }
      ],
      contentClasses: [
        'service__content_widthOnlargeScreen_45',
        'service__content_floatOnlargeScreen_right'
      ],
      paragraphs: [
        'Nasnav easy and fast',
        'Manage your company branches easily',
        'Sed mollitia ea. Debitis quaerat odit voluptatum consequatur soluta vero. Soluta accusantium dolorem dolor sint quia ut. Consequuntur et repudiandae.',
        'Non iure asperiores dolorum quibusdam. Omnis fugit itaque dolores quo. Eos aut error facilis eum enim aperiam quo.'
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

export default DashboardPage;