import React from 'react'

import PropTypes from 'prop-types'

import './company-logos.css'

const CompanyLogos = (props) => {
  return (
    <div
      className={`company-logos-companies-logo-banner align-center padding-m position-relative column width-100 ${props.rootClassName} `}
    >
      <div className="align-center width-max-content justify-in-between width-100 row gap-xxl company-logos-max-width">
        <img
          alt="image"
          src={props.image1Src}
          className="company-logos-image1"
        />
        <img
          alt="Autotrader"
          src={props.image2Src}
          className="company-logos-image2"
        />
        <img
          alt="image"
          src={props.image3Src}
          className="company-logos-image3"
        />
        <img
          alt="image"
          src={props.image4Src}
          className="company-logos-image4"
        />
        <img
          alt="image"
          src={props.image5Src}
          className="company-logos-image5"
        />
      </div>
    </div>
  )
}

CompanyLogos.defaultProps = {
  image4Src: '/Pages/Home/fedex.svg',
  image2Src: '/Pages/Home/amazon.svg',
  image5Src: '/Pages/Home/nasa_logo1.svg',
  rootClassName: '',
  image3Src: '/Pages/Home/emirates1.svg',
  image1Src: '/Pages/Home/nba.svg',
}

CompanyLogos.propTypes = {
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image3Src: PropTypes.string,
  image1Src: PropTypes.string,
}

export default CompanyLogos
