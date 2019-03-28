import React from 'react';
import Header from '../header/Header';
import computer from '../../image/computer.png';
import editor1 from '../../image/laptop-1.png';
import editor2 from '../../image/laptop-2.png';
import editor3 from '../../image/laptop-3.png';
import Thriller from '../thriller/Thriller';
import ServiceSection from '../service/ServiceSection';
import StatisticsSection from './StatisticsSection';

const Editor360Page = () => {
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
      {src: computer, alt: 'NasNav web builder'}
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
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_overHalf',
            'service__imageContainer_floatOnlargeScreen_right',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: editor1,
              alt: 'NasNav web builder',
              classes: [
                'service__image',
                'service__image_style_normal',
                'service__image_upOnlargeScreen_med'
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
        'Navbox Editor',
        'Organize your form as you want.shaving in google sky',
        'You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.'
      ]
    },
    {
      name: 'editor2',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_overHalf',
            'service__imageContainer_floatOnlargeScreen_left',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: editor2,
              alt: 'NasNav web builder',
              classes: [
                'service__image',
                'service__image_style_normal',
                'service__image_upOnlargeScreen_med'
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
        '360 view in navbox',
        'Displays all your branches and products 360 technology',
        'Fugiat sunt quisquam. Et dolorem id magni soluta optio accusantium occaecati. Id vitae architecto. Enim dignissimos corporis sunt molestiae enim. Doloribus rem quisquam iste officia impedit voluptatum sunt aut. Vel autem reiciendis illo.'
      ]
    },
    {
      name: 'editor3',
      imageContainers: [
        {
          classes: [
            'service__imageContainer_widthOnlargeScreen_overHalf',
            'service__imageContainer_floatOnlargeScreen_right',
            'service__imageContainer_imagePositionOnSmallScreen_center'
          ],
          images: [
            {
              src: editor3,
              alt: 'NasNav web builder',
              classes: [
                'service__image',
                'service__image_style_normal',
                'service__image_upOnlargeScreen_med'
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
        'Navbox Editor',
        'Organize your form as you want.shaving in google sky',
        'You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.'
      ]
    }
  ]
;  return (
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

export default Editor360Page;