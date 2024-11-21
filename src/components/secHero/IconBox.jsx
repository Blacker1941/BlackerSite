import React from 'react';
import '../../css/hero.css';

function IconBox({title: ProductTitle,children}) {
  return (
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line">{children}</i>
            <h3><a href="">{ProductTitle}</a></h3>
          </div>
        </div>
  );
}

export default IconBox;