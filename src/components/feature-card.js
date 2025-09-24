import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className={`feature-card-container1 ${props.rootClassName} `}>
      <div className="feature-card-with-top-label gap-s padding-m position-relative shadow-box-10-large width-100 row">
        <img
          alt={props.leftImageAlt}
          src={props.leftImageSrc}
          className="feature-card-left-image"
        />
        <div className="feature-card-content gap-xxs column">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="feature-card-logo"
          />
          <div className="feature-card-container2 gap-s column">
            <span className="text-body-1">
              {props.description ?? (
                <Fragment>
                  <span className="feature-card-text2">
                    The most widely used web application security testing
                    software.
                  </span>
                </Fragment>
              )}
            </span>
            <Button
              btnType="quarternary"
              btnLabel={
                <Fragment>
                  <span className="feature-card-text1">Find out more</span>
                </Fragment>
              }
              iconType="arrow-right"
              rootClassName="buttonroot-class-name51"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {
  logoSrc: '/Logos/Light/burp-suite1-200h.png',
  url: 'https://www.teleporthq.io',
  leftImageSrc: '/Pages/Home/burp-suite-home-1-300w-400h.webp',
  leftImageAlt: 'image',
  rootClassName: '',
  description: undefined,
  logoAlt: 'logo',
}

FeatureCard.propTypes = {
  logoSrc: PropTypes.string,
  url: PropTypes.string,
  leftImageSrc: PropTypes.string,
  leftImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default FeatureCard
