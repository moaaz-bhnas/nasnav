import React from 'react';
import './Service.scss';
import './ServiceImage.scss';
import './ServiceContent.scss';
import LazyLoad from "react-lazy-load";

const Service = (props) => {
  const { name, imageContainer, contentClasses, paragraphs, steps, buttons } = props.serviceData;
  const { image } = imageContainer;
  const [ paragraph1, paragraph2, paragraph3, paragraph4 ] = paragraphs;

  return (
    <article className={`service ${name}`} role="article"> 
      <div 
        className={`service__imageContainer ${imageContainer.classes.join(' ')}`}
        // style={{paddingBottom: `${imageContainer1.paddingBottom}%`}}
      >
        <LazyLoad>
          <img 
            src={image.src} 
            alt={image.alt} 
            className={image.classes.join(' ')}
          />
        </LazyLoad>
      </div>
      <div className={`service__content ${contentClasses.join(' ')}`}>
        <h3 className="service__title">{name}</h3>
        <p className="paragraph paragraph_color_grey">
          {paragraph1}
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          {
            paragraph2.includes('*') ?
            <React.Fragment>
              <strong>{paragraph2.slice(1, paragraph2.lastIndexOf('*'))}</strong>
              {paragraph2.slice(paragraph2.lastIndexOf('*')+1)}
            </React.Fragment> :
            paragraph2
          }
        </p>
        <p className="paragraph paragraph_color_grey paragraph_line_high">
          {paragraph3}
        </p>
        {
          paragraph4 &&
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            {paragraph4}
          </p>
        }
        {
          steps &&
          <ul className="list stepList">
            {steps.map((step, index) => (
              <li key={index} className="step stepList__step">
                <span aria-hidden="true" className="step__icon"></span>
                {step.text}
                {
                  step.googleIcon &&
                  <img src={step.googleIcon} alt="Google logo" className="step__googleIcon"/>
                }
              </li>
            ))}
          </ul>
        }
        {
          buttons &&
          buttons.map((button) => (
            <button key={button.text} className={`button service__button button_color_white button_back_${button.backgroundColor} button_shape_oval button_size_large buttn_decoration_underline`}>{button.text}</button>
          ))
        }
      </div>
    </article>
  );
}

export default Service;