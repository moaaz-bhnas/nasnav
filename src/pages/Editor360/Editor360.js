import React from 'react';
import Header from '../../components/header/Header';
import Thriller from '../../components/thriller/Thriller';
import ServiceSection from '../../components/service/ServiceSection';
import StatisticsSection from './StatisticsSection';
import editor360PageImages from '../../pages-images/360editor-page-images';
const { computer, computerSm, editor1, editor2, editor3 } = editor360PageImages;

const pageName = 'editor360';
const header = {
  text: {
    paragraphs: [
      '*Device* download all your products on Google search engine',
      'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
    ],
    button: 'Get Started'
  },
  images: [
    {lg: computer, sm: computerSm, alt: 'NasNav web builder'}
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
    name: 'editor',
    imageContainer: {
      classes: [
        'service__imageContainer_widthOnlargeScreen_overHalf',
        'service__imageContainer_floatOnlargeScreen_right',
        'service__imageContainer_imagePositionOnSmallScreen_center'
      ],
      image: {
        src: editor1,
        alt: 'NasNav web builder',
        classes: [
          'service__image',
          'service__image_style_normal',
          'service__image_upOnlargeScreen_med'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_lessThanHalf',
      'service__content_floatOnlargeScreen_left'
    ],
    paragraphs: [
      'Navbox Editor',
      'Organize your form as you want.shaving in google sky',
      'You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.'
    ]
  },
  {
    name: 'editor2',
    imageContainer: {
      classes: [
        'service__imageContainer_widthOnlargeScreen_overHalf',
        'service__imageContainer_floatOnlargeScreen_left',
        'service__imageContainer_imagePositionOnSmallScreen_center'
      ],
      image: {
        src: editor2,
        alt: 'NasNav web builder',
        classes: [
          'service__image',
          'service__image_style_normal',
          'service__image_upOnlargeScreen_med'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_lessThanHalf',
      'service__content_floatOnlargeScreen_right'
    ],
    paragraphs: [
      '360 view in navbox',
      'Displays all your branches and products 360 technology',
      'Fugiat sunt quisquam. Et dolorem id magni soluta optio accusantium occaecati. Id vitae architecto. Enim dignissimos corporis sunt molestiae enim. Doloribus rem quisquam iste officia impedit voluptatum sunt aut. Vel autem reiciendis illo.'
    ]
  },
  {
    name: 'editor3',
    imageContainer: {
      classes: [
        'service__imageContainer_widthOnlargeScreen_overHalf',
        'service__imageContainer_floatOnlargeScreen_right',
        'service__imageContainer_imagePositionOnSmallScreen_center'
      ],
      image: {
        src: editor3,
        alt: 'NasNav web builder',
        classes: [
          'service__image',
          'service__image_style_normal',
          'service__image_upOnlargeScreen_med'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_lessThanHalf',
      'service__content_floatOnlargeScreen_left'
    ],
    paragraphs: [
      'Navbox Editor',
      'Organize your form as you want.shaving in google sky',
      'You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.'
    ]
  }
];

const Editor360 = () => {
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
      <StatisticsSection />
    </React.Fragment>
  );
}

export default Editor360;