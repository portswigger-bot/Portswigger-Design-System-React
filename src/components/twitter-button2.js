import React from 'react'

import PropTypes from 'prop-types'

import './twitter-button2.css'

const TwitterButton2 = (props) => {
  return (
    <div className={`twitter-button2-container ${props.rootClassName} `}>
      <div
        href="https://twitter.com/Burp_Suite"
        className="twitter-button2-frame5622"
      >
        <div className="twitter-button2-frame5626">
          <img
            alt="TwitterandXlogossvg14713"
            src="/external/twitterandxlogossvg14713-0pok-200h-200h.webp"
            className="twitter-button2-twitterand-xlogossvg1"
          />
          <span className="twitter-button2-text">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

TwitterButton2.defaultProps = {
  rootClassName: '',
  text: 'Follow us',
}

TwitterButton2.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TwitterButton2
