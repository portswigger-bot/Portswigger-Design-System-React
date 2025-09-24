import React from 'react'

import PropTypes from 'prop-types'

import './live-tag-production.css'

const LiveTagProduction = (props) => {
  return (
    <div
      portswigger-live-tag-production="5a9e3886-3303-415c-a955-f221bb95905a"
      className={`live-tag-production-container ${props.rootClassName} `}
    ></div>
  )
}

LiveTagProduction.defaultProps = {
  rootClassName: '',
}

LiveTagProduction.propTypes = {
  rootClassName: PropTypes.string,
}

export default LiveTagProduction
