import React from 'react';
import '../../../css/features.css';

function IconBox2({title: ProductTitle,p,children}) {
  return (
    <>
        <i className="bx bx-receipt">{children}</i>
        <h4 className='features-h4'>{ProductTitle}</h4>
        <p className='features-p'>{p}</p>
    </>
  );
}

export default IconBox2;