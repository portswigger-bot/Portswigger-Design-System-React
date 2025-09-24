import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './feature-card-with-top-label.css'

const FeatureCardWithTopLabel = (props) => {
  return (
    <div className="feature-card-with-top-label gap-s padding-m position-relative shadow-box-10-large width-100 row">
      <img
        alt={props.leftImageAlt}
        src={props.leftImageSrc}
        className="feature-card-with-top-label-left-image"
      />
      <div className="feature-card-with-top-label-content gap-xxs column">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="feature-card-with-top-label-logo"
        />
        <div className="feature-card-with-top-label-container gap-s column">
          <span className="text-body-1">
            {props.description ?? (
              <Fragment>
                <span className="feature-card-with-top-label-text2">
                  The most widely used web application security testing
                  software.
                </span>
              </Fragment>
            )}
          </span>
          <a href={props.url}>
            <Button
              btnType="quarternary"
              btnLabel={
                <Fragment>
                  <span className="feature-card-with-top-label-text1">
                    Find out more
                  </span>
                </Fragment>
              }
              iconType="arrow-right"
              rootClassName="buttonroot-class-name13"
            ></Button>
          </a>
        </div>
      </div>
      <div
        className={`position-absolute padding-vertical-xxs shadow-box-10-large padding-horizontal-s card-top-floating-label ${
          props?.labelColor === 'Community' ? 'label-community' : ''
        } ${props?.labelColor === 'Pro' ? 'label-pro' : ''} ${
          props?.labelColor === 'Enterprise' ? 'label-enterprise' : ''
        } ${props?.labelColor === 'Orange' ? 'label-orange' : ''} `}
      >
        <span className="feature-card-with-top-label-label2 text-body-2">
          {props.label ?? (
            <Fragment>
              <span className="feature-card-with-top-label-text3">Test</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

FeatureCardWithTopLabel.defaultProps = {
  leftImageSrc: '/Pages/Home/burp-suite-home-1-300w-300w.webp',
  logoAlt: 'logo',
  labelColor: 'Orange',
  description: undefined,
  url: 'https://www.teleporthq.io',
  label: undefined,
  logoSrc: '/Logos/Light/burp-suite1-1500w.png',
  leftImageAlt: 'image',
}

FeatureCardWithTopLabel.propTypes = {
  leftImageSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  labelColor: PropTypes.string,
  description: PropTypes.element,
  url: PropTypes.string,
  label: PropTypes.element,
  logoSrc: PropTypes.string,
  leftImageAlt: PropTypes.string,
}

export default FeatureCardWithTopLabel
