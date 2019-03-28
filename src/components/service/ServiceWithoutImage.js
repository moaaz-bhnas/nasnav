import React from 'react';
import './ServiceWithoutImage.scss';

const ServiceWithoutImage = (props) => {
  const {name} = props.serviceData;
  const [paragraph1, paragraph2] = props.serviceData.paragraphs;
  return (
    <div className={`serviceWithoutImage ${name}`}>
    <p className="paragraph serviceWithoutImage__paragraph navstyles__serviceParagraph paragraph_line_med paragraph_size_large paragraph_align_center paragraph_shortened_large paragraph_centered">
        {
          paragraph1.includes('*') ?
          <React.Fragment>
            <strong>{paragraph1.slice(1, paragraph1.lastIndexOf('*'))}</strong>
            {paragraph1.slice(paragraph1.lastIndexOf('*')+1)}
          </React.Fragment> :
          paragraph1
        }
      </p>
      <p className="paragraph paragraph_line_high paragraph_color_grey paragraph_align_center paragraph_shortened_large paragraph_centered serviceSection__paragraph">
        {paragraph2}
      </p>
    </div>
  );
}

export default ServiceWithoutImage;