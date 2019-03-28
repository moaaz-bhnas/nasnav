import React from 'react';
import './Service.scss';
import './ServiceImage.scss';
import './ServiceContent.scss';

const Service = (props) => {
  const {name, imageContainers, contentClasses, paragraphs, steps, buttons} = props.serviceData;
  const [imageContainer1, imageContainer2] = imageContainers;
  const [paragraph1, paragraph2, paragraph3, paragraph4] = paragraphs;

  return (
    <article className={`service ${name}`} role="article">
      <div className={`service__imageContainer ${imageContainer1.classes.join(' ')}`}>
        {
          imageContainer1.images.map((image) => (
            <img 
              key={image.src} 
              src={image.src} 
              alt={image.alt} 
              className={image.classes.join(' ')}
            />
          ))
        }
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
                <img src={step.iconSrc} alt={step.iconAlt} className="step__icon"/>
                <span className="step__explanation">
                  {step.text}
                  {
                    step.googleIcon &&
                    <img src={step.googleIcon} alt="Google logo" className="step__googleIcon"/>
                  }
                </span>
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
      {
        imageContainer2 &&
        <div className={`service__imageContainer ${imageContainer2.classes.join(' ')}`}>
          {
            imageContainer2.images.map((image) => (
              <img 
                key={image.src} 
                src={image.src} 
                alt={image.alt} 
                className={image.classes.join(' ')}
              />
            ))
          }
          {
            imageContainer2.chair &&
            <div className="chair__content">
              <h4 className="chair__title">Modern Chair</h4>
              <p className="paragraph chair__paragraph paragraph_color_grey">Chair is a piece of furniture with raised surface supported by legs, commonly supported most often by four legs ..</p>
            </div>
          }
        </div>
      }
    </article>
  );
}

export default Service;