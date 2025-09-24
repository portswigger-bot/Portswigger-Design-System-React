import React from 'react'

import PropTypes from 'prop-types'

import './full-width-section-starter.css'

const FullWidthSectionStarter = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="full-width-section-starter-max-width gap-m width-max-content column width-100"></div>
    </div>
  )
}

FullWidthSectionStarter.defaultProps = {
  rootClassName: '',
}

FullWidthSectionStarter.propTypes = {
  rootClassName: PropTypes.string,
}

export default FullWidthSectionStarter
