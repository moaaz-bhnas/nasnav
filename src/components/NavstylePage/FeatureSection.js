import React from 'react';
import './FeatureSection.scss';
import Feature from './Feature';
import feature1 from '../../image/feature1.png';
import feature2 from '../../image/feature2.png';
import feature3 from '../../image/feature3.png';
import feature4 from '../../image/feature4.png';
import feature5 from '../../image/feature5.png';
import feature6 from '../../image/feature6.png';
import feature7 from '../../image/feature7.png';
import feature8 from '../../image/feature8.png';
import feature9 from '../../image/feature9.png';
import feature10 from '../../image/feature10.png';
import feature11 from '../../image/feature11.png';
import feature12 from '../../image/feature12.png';

const FeatureSection = () => {
  const features = [
    {
      image: feature1,
      title: 'Stunning Templates',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature2,
      title: 'Total Design Freedom',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature3,
      title: 'Industry-Leading SEO',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature4,
      title: 'Mobile Optimized',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature5,
      title: 'App Market',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature6,
      title: 'Unlimited Fonts',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature7,
      title: 'Scroll Effects',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature8,
      title: 'Media Galleries',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature9,
      title: 'Advanced Code Capability',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature10,
      title: 'Repeating Layouts',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature11,
      title: 'Multiple Payment Methods',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: feature12,
      title: 'Custom Interactions',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    } 
  ];

  return (
    <section className="featureSection" role="region" aria-labelledby="featureSection__title">
      <div className="container">
        <h2 className="featureSection__title" id="featureSection__title">Features</h2>
        <ul className="list featureList">
          {
            features.map((feature) => (
              <Feature key={feature.title} featureData={feature} />
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection;