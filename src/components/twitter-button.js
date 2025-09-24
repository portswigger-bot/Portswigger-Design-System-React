import React from 'react'

import PropTypes from 'prop-types'

import './twitter-button.css'

const TwitterButton = (props) => {
  return (
    <div className={`twitter-button-container ${props.rootClassName} `}>
      <div
        href="https://twitter.com/Burp_Suite"
        className="twitter-button-frame5622"
      >
        <div className="twitter-button-frame5626">
          <img
            alt="TwitterandXlogossvg14713"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08f747ed-00a5-4c49-bf33-6ab4b22224ae/b8ba79cc-0e8b-4f01-bfcd-8ebccd131f5a?org_if_sml=1&amp;q=80305&amp;force_format=original"
            className="twitter-button-twitterand-xlogossvg1"
          />
          <span className="twitter-button-text">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

TwitterButton.defaultProps = {
  text: 'Follow us',
  rootClassName: '',
}

TwitterButton.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TwitterButton
