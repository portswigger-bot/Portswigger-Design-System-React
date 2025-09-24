import React from 'react'

import PropTypes from 'prop-types'

import './twitter-button1.css'

const TwitterButton1 = (props) => {
  return (
    <div className={`twitter-button1-container ${props.rootClassName} `}>
      <div
        href="https://twitter.com/Burp_Suite"
        className="twitter-button1-frame5622"
      >
        <div className="twitter-button1-frame5626">
          <img
            alt="TwitterandXlogossvg14713"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08f747ed-00a5-4c49-bf33-6ab4b22224ae/b6d404b3-d7c9-49f7-bb56-105ad4174720?org_if_sml=1&amp;q=80305&amp;force_format=original"
            className="twitter-button1-twitterand-xlogossvg1"
          />
          <span className="twitter-button1-text">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

TwitterButton1.defaultProps = {
  rootClassName: '',
  text: 'Follow us',
}

TwitterButton1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TwitterButton1
