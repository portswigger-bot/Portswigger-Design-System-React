import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Icon from './icon'
import './simple-card.css'

const SimpleCard = (props) => {
  return (
    <a href={props.url} className="simple-card-link">
      <div
        className={`padding-s gap-s position-relative column simple-card radius-m ${props.rootClassName} `}
      >
        <h4 className="simple-card-text1 heading-4">
          {props.heading ?? (
            <Fragment>
              <span className="simple-card-text4">
                What to expect from the application process
              </span>
            </Fragment>
          )}
        </h4>
        <button
          type="button"
          className="simple-card-button-link button-quarternary row gap-xs"
        >
          <span className="simple-card-text2 heading-5">
            {props.linkLabel ?? (
              <Fragment>
                <span className="simple-card-text3">Read more</span>
              </Fragment>
            )}
          </span>
          <Icon type="arrow-right"></Icon>
        </button>
      </div>
    </a>
  )
}

SimpleCard.defaultProps = {
  url: 'https://www.teleporthq.io',
  rootClassName: '',
  linkLabel: undefined,
  heading: undefined,
}

SimpleCard.propTypes = {
  url: PropTypes.string,
  rootClassName: PropTypes.string,
  linkLabel: PropTypes.element,
  heading: PropTypes.element,
}

export default SimpleCard
