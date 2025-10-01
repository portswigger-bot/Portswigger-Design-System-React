import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import NotificationTopHeader from './notification-top-header'
import './minimal-header.css'

const MinimalHeader = (props) => {
  return (
    <div
      className={`minimal-header-container1 width-100 ${props.rootClassName} `}
    >
      <div className="minimal-header-container2">
        <NotificationTopHeader
          text={
            <Fragment>
              <span className="minimal-header-text">Read More</span>
            </Fragment>
          }
          rootClassName="notification-top-headerroot-class-name1"
        ></NotificationTopHeader>
        <div className="minimal-header-container3 align-center position-relative padding-horizontal-m padding-vertical-s column width-100">
          <div className="gap-m align-center column width-100">
            <a href={props.imageUrl}>
              <img
                alt="image"
                src={props.imageSrc}
                className="minimal-header-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

MinimalHeader.defaultProps = {
  imageUrl: 'https://portswigger.net',
  rootClassName: '',
  imageSrc: '/Logos/Dark/dark-portswigger-200h.png',
}

MinimalHeader.propTypes = {
  imageUrl: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default MinimalHeader
