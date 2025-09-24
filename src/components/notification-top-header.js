import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './notification-top-header.css'

const NotificationTopHeader = (props) => {
  return (
    <div
      className={`notification-top-header-container notification-top-banner align-center position-relative padding-horizontal-m column justify-center width-100 ${props.rootClassName} `}
    >
      <div className="width-max-content row notification-top-header-max-width">
        <span className="notification-top-header-text1 text-body-2">
          Your agentic AI partner in Burp Suite - Discover Burp AI now
        </span>
        <span className="notification-top-header-text2 text-body-1">
          <span>          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <a
          href={props.textUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="notification-top-header-link text-body-2"
        >
          {props.text ?? (
            <Fragment>
              <span className="notification-top-header-text6">Read More</span>
            </Fragment>
          )}
        </a>
      </div>
    </div>
  )
}

NotificationTopHeader.defaultProps = {
  rootClassName: '',
  textUrl: '/burp/ai',
  text: undefined,
}

NotificationTopHeader.propTypes = {
  rootClassName: PropTypes.string,
  textUrl: PropTypes.string,
  text: PropTypes.element,
}

export default NotificationTopHeader
