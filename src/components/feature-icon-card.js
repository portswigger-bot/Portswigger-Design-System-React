import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './feature-icon-card.css'

const FeatureIconCard = (props) => {
  return (
    <div
      className={`feature-icon-card-feature-icon-card gap-s align-start row ${props.rootClassName} `}
    >
      <img alt="image" src={props.iconSrc} className="feature-icon-card-icon" />
      <span className="text-body-1">
        {props.text ?? (
          <Fragment>
            <span className="feature-icon-card-text2">
              Catch the latest vulnerabilities with Burp Scanner - the dynamic
              (DAST) web vulnerability scanner trusted by over 16,000
              organizations.
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

FeatureIconCard.defaultProps = {
  iconSrc: '/Icons/scan.svg',
  text: undefined,
  rootClassName: '',
}

FeatureIconCard.propTypes = {
  iconSrc: PropTypes.string,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default FeatureIconCard
