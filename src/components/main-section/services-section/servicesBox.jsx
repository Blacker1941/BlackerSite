import React from 'react';
import '../../../css/portfolio.css';

function ServicesBox({ title, Icon ,A_Title }) {
  return (
    <div className="icon-box">
      <div className="icon">
        <i className=" bx-file">{Icon}</i>
      </div>
      <h4><a href="">{A_Title}</a></h4>
      <p>{title}</p>
    </div>
  );
}

export default ServicesBox;
