import React from 'react';
import hash from '../../../image/hashtag.svg';
import './FeatureSection.scss';

const FeatureSection = () => {
  return (
    <section className="FeatureSection" role="region" aria-labelledby="featureSection__title">
      <div className="container">
        <h2 className="featureSection__title" id="featureSection__title">Features</h2>
        <ul className="list featureList">
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Stunning Templates</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Total Design Freedom</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Industry-Leading SEO</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Mobile Optimized</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">App Market</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Unlimited Fonts</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Scroll Effects</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Media Galleries</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Advanced Code Capability</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Repeating Layouts</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Multiple Payment Methods</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
          <li className="feature">
            <div className="feature__iconWrapper">
              <img src={hash} alt="" className="image image_size_full feature__icon"/>
            </div>
            <h3 className="feature__title">Custom Interactions</h3>
            <p className="paragraph paragraph_line_high paragraph_color_grey">
              Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection;