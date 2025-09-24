import React from 'react'

import PropTypes from 'prop-types'

import './footer-column-title2.css'

const FooterColumnTitle2 = (props) => {
  return (
    <div className={`footer-column-title2-container ${props.rootClassName} `}>
      <p className="footer-column-title2-text">{props.text}</p>
    </div>
  )
}

FooterColumnTitle2.defaultProps = {
  rootClassName: '',
  text: 'Header1',
}

FooterColumnTitle2.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default FooterColumnTitle2
