import React from 'react';
import Header from '../../components/header/Header';
import Thriller from '../../components/thriller/Thriller';
import ServiceSection from '../../components/service/ServiceSection';
import FeatureSection from './FeatureSection';
import navstylePageImages from '../../pages-images/navstyles-page-images';
import Slider from '../../components/slider/Slider';
import './Navstyle.scss';
const { styles, stylesSm, serviceImage1, serviceImage2, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11 } = navstylePageImages;

const pageName = 'navstyle';
const header = {
  text: {
    paragraphs: [
      '*Choose* examples to show products to your customers',
      'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
    ],
    button: 'Get Started'
  },
  images: [
    {lg: styles, sm: stylesSm, alt: 'Multiple screens showing various NasNav designs'}
  ]
}
const thriller = {
  paragraphs: [
    'Choose among great models to be featured',
    'Through a few simple steps can make your shop up to the public quickly.',
    'Aspernatur eligendi perspiciatis qui eveniet temporibus et. In molestias odio et et. Possimus ipsum facere saepe ullam id. Impedit est aut dicta autem modi reprehenderit ab occaecati.'
  ]
}
const services = [
  {
    name: 'styles3',
    imageContainer: {
      classes: [
        'service__imageContainer_widthOnlargeScreen_lessThanHalf',
        'service__imageContainer_floatOnlargeScreen_left'
      ],
      image: {
        src: serviceImage1,
        alt: 'multiple screens showing various styles',
        classes: [
          'service__image'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_overHalf',
      'service__content_floatOnlargeScreen_right'
    ],
    paragraphs: [
      'You\'ll get the device wherever you are',
      '*Multiple* forms you can modify to suit your needs and customers',
      'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
    ],
    buttons: [
      {text: 'Download PDF', backgroundColor: 'blue'}
    ]
  },
  {
    textOnly: true,
    name: 'uniqueDesigns',
    paragraphs: [
      'Unique designs you can choose between them with a single button',
      'Through a few simple steps can make your shop up to the public quickly'
    ]
  },
  {
    name: 'styles4',
    imageContainer: {
      classes: [
        'service__imageContainer_widthOnlargeScreen_lessThanHalf',
        'service__imageContainer_floatOnlargeScreen_left',
        'service__imageContainer_width_limited',
        'service__imageContainer_positionOnSmallScreen_center'
      ],
      image: {
        src: serviceImage2,
        alt: 'multiple screens showing various styles',
        classes: [
          'service__image',
          'service__image_style_normal'
        ]
      }
    },
    contentClasses: [
      'service__content_widthOnlargeScreen_overHalf',
      'service__content_floatOnlargeScreen_right'
    ],
    paragraphs: [
      'You\'ll get the device wherever you are',
      '*Multiple* forms you can modify to suit your needs and customers',
      'Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box'
    ],
    buttons: [
      {text: 'Download PDF', backgroundColor: 'blue'}
    ]
  }
];
const slides = [
  { src: slide1, alt: 'Femex Theme' },
  { src: slide2, alt: 'Fortune Theme' },
  { src: slide3, alt: 'Nissan Theme' },
  { src: slide4, alt: 'City Stars Theme' },
  { src: slide5, alt: 'Sallab Theme' },
  { src: slide6, alt: 'Happy Theme' },
  { src: slide7, alt: 'Ravin Theme' },
  { src: slide8, alt: 'Osoul Theme' },
  { src: slide9, alt: 'Super Theme' },
  { src: slide10, alt: 'Outlet Theme' },
  { src: slide11, alt: 'AI\'s Image Theme' }
];

const Navstyle = () => {
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
      <Slider 
        sliderType="styleSlider"
        sliderSize='small'
        slides={slides}
        visibleSlidesNum={1}
      />
      <Slider 
        sliderType="styleSlider"
        sliderSize='med'
        slides={slides}
        visibleSlidesNum={2}
      />
      <Slider 
        sliderType="styleSlider"
        sliderSize='large'
        slides={slides}
        visibleSlidesNum={3}
      />
      <div className="container">
        <p className="paragraph navstyles__paragraph paragraph_line_high paragraph_color_grey paragraph_align_center paragraph_centered">
          You'll get the device wherever you are
        </p>
        <p className="paragraph navstyles__paragraph paragraph_line_high paragraph_size_large paragraph_align_center paragraph_shortened_large paragraph_centered">
          <strong>Many</strong> advantages are available in your new system
        </p>
      </div>
      <FeatureSection />
    </React.Fragment>
  );
}

export default Navstyle;