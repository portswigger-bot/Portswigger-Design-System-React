import React from 'react'

import PropTypes from 'prop-types'

import './footer-column-title1.css'

const FooterColumnTitle1 = (props) => {
  return (
    <div className={`footer-column-title1-container ${props.rootClassName} `}>
      <p className="footer-column-title1-text">{props.text}</p>
    </div>
  )
}

FooterColumnTitle1.defaultProps = {
  rootClassName: '',
  text: 'Header1',
}

FooterColumnTitle1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default FooterColumnTitle1
