import React from 'react'

import PropTypes from 'prop-types'

import './minimal-header.css'

const MinimalHeader = (props) => {
  return (
    <div
      className={`minimal-header-container align-center position-relative padding-horizontal-m padding-vertical-s column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m align-center width-max-content column width-100">
        <a href={props.imageUrl}>
          <img
            alt="image"
            src={props.imageSrc}
            className="minimal-header-image"
          />
        </a>
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
