import React from 'react';
import './HeaderContent.scss';

const HeaderContent = (props) => {
  const {text, width} = props;
  const [paragraph1, paragraph2] = text.paragraphs;

  return (
    <div className={`header__content header__content_widthOnLargeViewport_${width}`}>
      <p className="paragraph header__paragraph paragraph_size_xLarge paragraph_color_white paragraph_weight_light">
      {
          paragraph1.includes('*') ?
          <React.Fragment>
            <strong>{paragraph1.slice(1, paragraph1.lastIndexOf('*'))}</strong>
            {paragraph1.slice(paragraph1.lastIndexOf('*')+1)}
          </React.Fragment> :
          paragraph1
        }
      </p>
      <p className="paragraph header__paragraph paragraph_line_high paragraph_color_white paragraph_weight_med">
        {paragraph2}
      </p>
      <button className="button header__button button_color_blue button_back_white button_size_large button_shape_oval">
        {text.button}
      </button>
    </div>
  );
}

export default HeaderContent;