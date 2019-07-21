import React from 'react';
import './FeatureSection.scss';
import Feature from './Feature';

const FeatureSection = () => {
  const features = [
    {
      title: 'Stunning Templates',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Total Design Freedom',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Industry-Leading SEO',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Mobile Optimized',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'App Market',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Unlimited Fonts',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Scroll Effects',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Media Galleries',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Advanced Code Capability',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Repeating Layouts',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      title: 'Multiple Payment Methods',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
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