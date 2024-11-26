import React from 'react';
import '../../../css/portfolio.css';

function PortfolioBox({img,IconeLink,IconPlus,h4,p,filter}) {
  return (
    <>
        <div className="portfolio-wrap">
            <img src={img} className="img-fluidd" alt=""/>
            <div className="portfolio-info">
                <h4 className='white'>
                    {h4}
                </h4>
                <p className='white'>
                    {p}
                </p>
            <div className="portfolio-links">
                <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title={filter}>
                    <i className="bx bx-plus white yellow">
                    {IconPlus}
                    </i>
                </a>
                <a href="portfolio-details.html" className='portfolio-lightbox' title="More Details">
                    <i className="bx bx-link white yellow">
                    {IconeLink}
                    </i>
                </a>
            </div>
            </div>
        </div>
    </>
  );
}

export default PortfolioBox;